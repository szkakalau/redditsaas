import { CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-4 text-center text-sm text-[#6B7280] sm:flex-row sm:px-6 sm:text-left">
        <p>© 2026 Reddit Growth Engine</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-[#0B0F19] transition hover:text-[#6366F1]"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
