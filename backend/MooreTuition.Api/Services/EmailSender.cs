using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MooreTuition.Api.Dtos;

namespace MooreTuition.Api.Services;

public sealed partial class EmailSender(
    IOptions<ContactOptions> contactOptions,
    IOptions<SmtpOptions> smtpOptions,
    ILogger<EmailSender> logger) : IEmailSender
{
    public async Task SendContactAsync(ContactRequestDto request, CancellationToken cancellationToken)
    {
        var contact = contactOptions.Value;
        var smtp = smtpOptions.Value;

        if (string.IsNullOrWhiteSpace(smtp.Host))
        {
            LogContactFallback(
                logger,
                request.FirstName,
                request.LastName,
                request.Email,
                request.Message);
            return;
        }

        var message = new MimeMessage();
        var fromAddress = string.IsNullOrWhiteSpace(smtp.FromAddress) ? smtp.Username : smtp.FromAddress;
        message.From.Add(new MailboxAddress(smtp.FromName, fromAddress));
        message.To.Add(new MailboxAddress(contact.ToName, contact.ToAddress));
        message.ReplyTo.Add(new MailboxAddress($"{request.FirstName} {request.LastName}", request.Email));
        message.Subject = $"Moore Tuition enquiry from {request.FirstName} {request.LastName}";
        message.Body = new TextPart("plain")
        {
            Text =
                $"From: {request.FirstName} {request.LastName} <{request.Email}>\n\n{request.Message}",
        };

        using var client = new SmtpClient();
        await client.ConnectAsync(smtp.Host, smtp.Port, SecureSocketOptions.StartTls, cancellationToken);

        if (!string.IsNullOrWhiteSpace(smtp.Username))
        {
            await client.AuthenticateAsync(smtp.Username, smtp.Password, cancellationToken);
        }

        await client.SendAsync(message, cancellationToken);
        await client.DisconnectAsync(true, cancellationToken);
    }

    [LoggerMessage(
        EventId = 1,
        Level = LogLevel.Information,
        Message = "SMTP not configured — logging contact message from {FirstName} {LastName} <{Email}>: {Message}")]
    private static partial void LogContactFallback(
        ILogger logger,
        string firstName,
        string lastName,
        string email,
        string message);
}
