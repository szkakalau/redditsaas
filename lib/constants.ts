/** Public inbox for leads (override via NEXT_PUBLIC_CONTACT_EMAIL on Vercel). */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "liuguocong@gmail.com";

/** Optional: Formspree / Tally / Google Forms URL — if set, Hero shows “Prefer a form?” */
export function getOptionalFormUrl(): string | undefined {
  const u = process.env.NEXT_PUBLIC_FORM_URL?.trim();
  return u || undefined;
}

/** Legacy: booking link (not used; email-first). */
export function getStrategyCallUrl(): string | undefined {
  const u = process.env.NEXT_PUBLIC_STRATEGY_CALL_URL?.trim();
  return u || undefined;
}

/** mailto: link with prefilled subject + body for audit requests */
export function getAuditMailtoHref(): string {
  const subject = encodeURIComponent("Reddit Growth — Free audit request");
  // Keep mailto minimal for maximum compatibility across mobile/in-app browsers.
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
}

export function getStrategyCallMailtoHref(): string {
  const subject = encodeURIComponent("Reddit Growth — Email request");
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
}
