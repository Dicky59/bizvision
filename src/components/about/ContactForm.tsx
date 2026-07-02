"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 5_000;

export default function ContactForm() {
  const t = useTranslations("About.contactForm");

  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!values.name.trim()) e.name = t("errorRequired");
    if (!values.email.trim()) {
      e.email = t("errorRequired");
    } else if (!EMAIL_RE.test(values.email.trim())) {
      e.email = t("errorEmail");
    }
    if (!values.message.trim()) {
      e.message = t("errorRequired");
    } else if (values.message.length > MAX_MESSAGE) {
      e.message = t("errorMessageTooLong");
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setFormState("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setFormState("success");
        setValues({ name: "", email: "", message: "", website: "" });
      } else if (res.status === 429) {
        setServerError(t("errorRateLimit"));
        setFormState("error");
      } else {
        setServerError(t("errorGeneric"));
        setFormState("error");
      }
    } catch {
      setServerError(t("errorGeneric"));
      setFormState("error");
    }
  }

  function handleChange(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field as keyof FieldErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  if (formState === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded border border-bone bg-surface p-6 text-sm text-ink"
      >
        <p className="font-display font-semibold text-base mb-1">{t("successHeading")}</p>
        <p className="text-taupe">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Live region for server errors */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {serverError}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-600 rounded border border-red-200 bg-red-50 px-4 py-3">
          {serverError}
        </p>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px] overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="cf-name"
          className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep"
        >
          {t("labelName")}
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          disabled={formState === "submitting"}
          placeholder={t("placeholderName")}
          className={cn(
            "w-full h-11 px-4 rounded border bg-surface text-ink text-sm placeholder:text-taupe",
            "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep",
            "disabled:opacity-50",
            errors.name ? "border-red-400" : "border-bone"
          )}
        />
        {errors.name && (
          <p id="cf-name-error" role="alert" className="text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="cf-email"
          className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep"
        >
          {t("labelEmail")}
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange("email")}
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          disabled={formState === "submitting"}
          placeholder={t("placeholderEmail")}
          className={cn(
            "w-full h-11 px-4 rounded border bg-surface text-ink text-sm placeholder:text-taupe",
            "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep",
            "disabled:opacity-50",
            errors.email ? "border-red-400" : "border-bone"
          )}
        />
        {errors.email && (
          <p id="cf-email-error" role="alert" className="text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="cf-message"
          className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep"
        >
          {t("labelMessage")}
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          rows={5}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          disabled={formState === "submitting"}
          placeholder={t("placeholderMessage")}
          className={cn(
            "w-full px-4 py-3 rounded border bg-surface text-ink text-sm placeholder:text-taupe resize-y",
            "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep",
            "disabled:opacity-50",
            errors.message ? "border-red-400" : "border-bone"
          )}
        />
        {errors.message && (
          <p id="cf-message-error" role="alert" className="text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full sm:w-auto"
        >
          {formState === "submitting" ? t("sending") : t("submit")}
        </Button>

        <p className="mt-3 text-xs text-taupe">{t("gdpr")}</p>
      </div>
    </form>
  );
}
