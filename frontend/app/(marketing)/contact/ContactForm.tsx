"use client";

import { useState } from "react";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:5199";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const problem = await response.json().catch(() => null);
        throw new Error(
          problem?.title ?? "Something went wrong. Please try again or email directly.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email directly.",
      );
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-btn border-2 border-soft-2 bg-surface px-4 py-3 text-ink outline-none transition focus:border-blue";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" className="text-sm font-medium text-ink">
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          maxLength={100}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="lastName" className="text-sm font-medium text-ink">
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          maxLength={100}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          rows={6}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-btn bg-blue px-5 py-3 font-head text-lg font-semibold text-white shadow-[0_4px_14px_rgba(77,134,197,0.35)] transition hover:bg-blue-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "success" ? (
        <p className="rounded-btn bg-soft px-4 py-3 text-blue-deep" role="status">
          Thanks — your message has been sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-btn bg-soft px-4 py-3 text-ink" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
