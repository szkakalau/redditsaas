"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  getAuditMailtoHref,
  getOptionalFormUrl,
} from "@/lib/constants";

type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  className?: string;
  children: React.ReactNode;
};

function buildTemplate() {
  return [
    "Hi,",
    "",
    "I'd like a free Reddit growth audit.",
    "",
    "Startup / product:",
    "Target subreddits or niche (if any):",
    "",
  ].join("\n");
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older / restricted browsers.
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

export default function AuditLink({
  className,
  children,
  onClick,
  ...rest
}: Props) {
  const formUrl = getOptionalFormUrl();
  const href = useMemo(() => (formUrl ? formUrl : getAuditMailtoHref()), [formUrl]);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<"email" | "template" | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      setCopied(null);
      // Try to open mail client / form. In some in-app browsers, mailto is blocked.
      // We show a fallback dialog if the page never leaves.
      const targetHref = href;

      // Always do the navigation ourselves so we can reliably detect "no-op" cases.
      e.preventDefault();
      window.location.assign(targetHref);

      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        // If we're still visible, likely blocked -> show fallback.
        if (document.visibilityState === "visible") setOpen(true);
      }, 900);
    },
    [href, onClick]
  );

  const copyEmail = useCallback(async () => {
    const ok = await copyToClipboard(CONTACT_EMAIL);
    if (ok) setCopied("email");
  }, []);

  const copyTemplate = useCallback(async () => {
    const ok = await copyToClipboard(buildTemplate());
    if (ok) setCopied("template");
  }, []);

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={handleClick}
        {...rest}
        {...(formUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="p-5 sm:p-6">
              <p className="font-display text-lg font-semibold text-[#0B0F19]">
                Can’t open your mail app?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Some mobile browsers (especially in-app) block <span className="font-medium">mailto:</span>.
                Copy our email (or the message template) and send it from your mail app.
              </p>

              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <p className="text-sm font-semibold text-[#0B0F19]">{CONTACT_EMAIL}</p>
              </div>

              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-[#0B0F19] px-4 text-sm font-semibold text-white active:scale-[0.99]"
                >
                  {copied === "email" ? "Copied email" : "Copy email"}
                </button>
                <button
                  type="button"
                  onClick={copyTemplate}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 text-sm font-semibold text-[#0B0F19] active:scale-[0.99]"
                >
                  {copied === "template" ? "Copied template" : "Copy message template"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl text-sm font-semibold text-[#6B7280] active:scale-[0.99]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

