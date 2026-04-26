"use client";

import { useCallback, useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  privacyNote: string;
  cta: string;
  successTitle: string;
  successSubtitle: string;
};

function isValidEmail(v: string) {
  const value = v.trim();
  if (!value) return false;
  // Pragmatic email validation: catch obvious mistakes without rejecting valid uncommon formats.
  if (value.length > 254) return false;
  const at = value.indexOf("@");
  if (at <= 0 || at !== value.lastIndexOf("@")) return false;
  const [local, domain] = value.split("@");
  if (!local || !domain) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  if (!domain.includes(".")) return false;
  return true;
}

function buildMailto({
  to,
  leadEmail,
  source,
  subjectText,
  introLine,
}: {
  to: string;
  leadEmail: string;
  source: string;
  subjectText: string;
  introLine: string;
}) {
  const subject = encodeURIComponent(subjectText);
  const body = encodeURIComponent(
    [
      introLine,
      "",
      `Lead email: ${leadEmail}`,
      `Source: ${source}`,
      `Page: ${typeof window !== "undefined" ? window.location.href : source}`,
      `Time: ${new Date().toISOString()}`,
      "",
      "Next step: reply with the requested kit/PDF.",
    ].join("\n")
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export default function PlaybookLeadMagnet({
  copy,
  id = "playbook",
  mailtoSubject = "Playbook request — Reddit Growth Engine",
  mailtoIntroLine = "New Playbook request",
  source = "reddit-growth-management",
  className,
}: {
  copy: Copy;
  id?: string;
  mailtoSubject?: string;
  mailtoIntroLine?: string;
  source?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const invalid = useMemo(() => touched && !isValidEmail(email), [email, touched]);
  const canSubmit = useMemo(() => isValidEmail(email), [email]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setTouched(true);
      if (!canSubmit) return;

      setSubmitted(true);
      // Manual delivery: open an email draft to you with the lead email + context.
      // Some in-app browsers may block navigation; we still show success state regardless.
      try {
        window.location.href = buildMailto({
          to: CONTACT_EMAIL,
          leadEmail: email.trim(),
          source,
          subjectText: mailtoSubject,
          introLine: mailtoIntroLine,
        });
      } catch {
        // no-op
      }
    },
    [canSubmit, email, mailtoIntroLine, mailtoSubject, source]
  );

  return (
    <section id={id} className={className}>
      <div className="rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              {copy.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-pretty text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
              {copy.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              {copy.subtitle}
            </p>
            <p className="mt-3 text-sm font-medium text-[#6B7280]">{copy.privacyNote}</p>
          </div>

          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
                <p className="text-base font-semibold text-emerald-950">{copy.successTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
                  {copy.successSubtitle}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="relative">
                  <label className="sr-only" htmlFor="playbook-email">
                    Email address
                  </label>
                  <input
                    id="playbook-email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    className={`min-h-[52px] w-full rounded-2xl border bg-white px-4 text-base font-semibold text-[#0B0F19] shadow-sm outline-none transition placeholder:font-medium placeholder:text-[#9CA3AF] focus:ring-4 sm:min-h-[48px] sm:text-sm ${
                      invalid
                        ? "border-rose-300 focus:border-rose-400 focus:ring-rose-200/60"
                        : "border-gray-200 focus:border-[#6366F1]/40 focus:ring-[#6366F1]/15"
                    }`}
                  />
                  {invalid ? (
                    <p className="mt-2 text-sm font-semibold text-rose-600">
                      Please enter a valid email.
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#0B0F19] px-6 text-base font-semibold text-white shadow-md transition enabled:hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.99] sm:min-h-[48px] sm:px-5 sm:text-sm"
                >
                  {copy.cta}
                </button>
              </form>
            )}

            <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">
              Prefer not to use email? Write us at{" "}
              <a
                className="font-semibold text-[#0B0F19] underline decoration-gray-300 underline-offset-4 hover:decoration-gray-400"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  mailtoSubject
                )}`}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

