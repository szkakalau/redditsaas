const stats = [
  { value: "120k+", label: "Post Views" },
  { value: "3k+", label: "Upvotes" },
  { value: "500+", label: "Comments" },
  { value: "1+", label: "Paying Customers Acquired" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className="text-2xl font-bold tracking-tight text-[#0B0F19] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
