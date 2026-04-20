const stats = [
  { value: "120k+", label: "Post Views" },
  { value: "3k+", label: "Upvotes" },
  { value: "500+", label: "Comments" },
  { value: "1+", label: "Paying Customers Acquired" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-md sm:p-6"
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-[#0B0F19] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-[#6B7280] sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
