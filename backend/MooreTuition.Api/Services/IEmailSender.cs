using MooreTuition.Api.Dtos;

namespace MooreTuition.Api.Services;

public interface IEmailSender
{
    Task SendContactAsync(ContactRequestDto request, CancellationToken cancellationToken);
}
