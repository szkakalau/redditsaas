import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1100px] flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#0B0F19]"
        >
          Reddit Growth Engine
        </Link>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
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
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#5558E3] hover:shadow-lg"
          >
            Book Audit
          </a>
        </div>
      </nav>
    </header>
  );
}
