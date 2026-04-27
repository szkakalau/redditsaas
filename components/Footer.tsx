import { CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10 sm:py-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-5 text-center text-sm text-[#6B7280] sm:flex-row sm:px-6 sm:text-left">
        <p>© 2026 Reddit Growth Engine</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center font-medium text-[#0B0F19] transition hover:text-[#6366F1]"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
