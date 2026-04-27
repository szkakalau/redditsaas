"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AuditLink from "@/components/AuditLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[#0B0F19]"
          onClick={() => setOpen(false)}
        >
          Reddit Growth Engine
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#case-study"
            className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]"
          >
            Case Study
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-[#6B7280] transition hover:text-[#0B0F19]"
          >
            Pricing
          </Link>
          <Link
            href="/cn"
            className="text-sm font-semibold text-[#0B0F19] transition hover:text-[#111827]"
          >
            中文
          </Link>
          <AuditLink
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition active:scale-[0.98] hover:bg-[#5558E3] hover:shadow-lg"
          >
            Request Audit
          </AuditLink>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white text-[#0B0F19] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col bg-white px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-1 flex-col gap-1 border-t border-gray-100 pt-4">
            <Link
              href="#case-study"
              className="flex min-h-[52px] items-center rounded-xl px-3 text-base font-semibold text-[#0B0F19] active:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Case Study
            </Link>
            <Link
              href="#pricing"
              className="flex min-h-[52px] items-center rounded-xl px-3 text-base font-semibold text-[#0B0F19] active:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/cn"
              className="flex min-h-[52px] items-center rounded-xl px-3 text-base font-semibold text-[#0B0F19] active:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              中文
            </Link>
            <AuditLink
              className="mt-4 flex min-h-[52px] items-center justify-center rounded-xl bg-[#6366F1] px-4 text-base font-semibold text-white shadow-lg active:scale-[0.99]"
              onClick={() => setOpen(false)}
            >
              Request Audit
            </AuditLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
