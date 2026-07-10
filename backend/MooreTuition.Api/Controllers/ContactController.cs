using Microsoft.AspNetCore.Mvc;
using MooreTuition.Api.Dtos;
using MooreTuition.Api.Services;

namespace MooreTuition.Api.Controllers;

[ApiController]
[Route("api/contact")]
public sealed class ContactController(IEmailSender emailSender) : ControllerBase
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Post(
        [FromBody] ContactRequestDto request,
        CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid)
        {
            return ValidationProblem(ModelState);
        }

        await emailSender.SendContactAsync(request, cancellationToken);
        return Ok(new { message = "Thanks — your message has been sent." });
    }
}
