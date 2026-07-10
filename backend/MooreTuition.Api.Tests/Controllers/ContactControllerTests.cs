using Microsoft.AspNetCore.Mvc;
using MooreTuition.Api.Controllers;
using MooreTuition.Api.Dtos;
using MooreTuition.Api.Services;

namespace MooreTuition.Api.Tests.Controllers;

public sealed class ContactControllerTests
{
    [Fact]
    public async Task Post_WithValidRequest_ReturnsOk_AndSendsEmail()
    {
        // Arrange
        var sender = new FakeEmailSender();
        var controller = new ContactController(sender);
        var request = new ContactRequestDto
        {
            FirstName = "Jane",
            LastName = "Smith",
            Email = "jane@example.com",
            Message = "Looking for 11+ maths tutoring.",
        };

        // Act
        var result = await controller.Post(request, CancellationToken.None);

        // Assert
        var ok = Assert.IsType<OkObjectResult>(result);
        Assert.Equal(200, ok.StatusCode);
        Assert.NotNull(sender.LastRequest);
        Assert.Equal("Jane", sender.LastRequest.FirstName);
        Assert.Equal("jane@example.com", sender.LastRequest.Email);
    }

    [Fact]
    public async Task Post_WithInvalidModelState_ReturnsValidationProblem()
    {
        // Arrange
        var sender = new FakeEmailSender();
        var controller = new ContactController(sender);
        controller.ModelState.AddModelError(nameof(ContactRequestDto.Email), "The Email field is required.");
        var request = new ContactRequestDto
        {
            FirstName = "Jane",
            LastName = "Smith",
            Email = "",
            Message = "Hello",
        };

        // Act
        var result = await controller.Post(request, CancellationToken.None);

        // Assert
        Assert.IsType<ObjectResult>(result);
        Assert.Null(sender.LastRequest);
    }

    private sealed class FakeEmailSender : IEmailSender
    {
        public ContactRequestDto? LastRequest { get; private set; }

        public Task SendContactAsync(ContactRequestDto request, CancellationToken cancellationToken)
        {
            LastRequest = request;
            return Task.CompletedTask;
        }
    }
}
