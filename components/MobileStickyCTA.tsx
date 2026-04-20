import { getAuditMailtoHref } from "@/lib/constants";

/** Thumb-zone primary CTA for small screens (majority of traffic). */
export default function MobileStickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 md:hidden">
      <div className="pointer-events-auto border-t border-gray-200/90 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_-8px_rgba(15,23,42,0.15)] backdrop-blur-md">
        <a
          href={getAuditMailtoHref()}
          className="flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-[#6366F1] text-center text-base font-semibold text-white shadow-md transition active:scale-[0.99] active:bg-[#5558E3]"
        >
          Request free Reddit audit
        </a>
      </div>
    </div>
  );
}
