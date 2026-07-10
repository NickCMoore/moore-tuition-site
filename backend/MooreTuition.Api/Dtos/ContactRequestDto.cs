using System.ComponentModel.DataAnnotations;

namespace MooreTuition.Api.Dtos;

public sealed record ContactRequestDto
{
    [Required]
    [MaxLength(100)]
    public required string FirstName { get; init; }

    [Required]
    [MaxLength(100)]
    public required string LastName { get; init; }

    [Required]
    [EmailAddress]
    [MaxLength(254)]
    public required string Email { get; init; }

    [Required]
    [MaxLength(4000)]
    public required string Message { get; init; }
}
