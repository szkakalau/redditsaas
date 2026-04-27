"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  getAuditMailtoHref,
} from "@/lib/constants";

type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  className?: string;
  children: React.ReactNode;
};

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
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

export default function StrategyCallLink({
  className,
  children,
  onClick,
  ...rest
}: Props) {
  // Email-first business: always route to a mailto (no booking page / no call required).
  const href = useMemo(() => getAuditMailtoHref(), []);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      // Always do the navigation ourselves so we can detect no-op in in-app browsers.
      e.preventDefault();
      window.location.assign(href);

      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        if (document.visibilityState === "visible") setOpen(true);
      }, 900);
    },
    [href, onClick]
  );

  const copyEmail = useCallback(async () => {
    const ok = await copyToClipboard(CONTACT_EMAIL);
    if (ok) setCopied(true);
  }, []);

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="p-5 sm:p-6">
              <p className="font-display text-lg font-semibold text-[#0B0F19]">
                Can’t open your email app?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Some in-app browsers block email opens. Copy our email and we’ll reply
                within 24 hours.
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
                  {copied ? "Copied email" : "Copy email"}
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

