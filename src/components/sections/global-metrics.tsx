
'use client';

export function GlobalMetrics() {
  const metrics = [
    { label: "Global Suppliers", value: "1.2M+" },
    { label: "Products Listed", value: "85M+" },
    { label: "Countries Connected", value: "198" },
    { label: "Annual Trade Volume", value: "$1.4T+" }
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
                {metric.value}
              </span>
              <h4 className="mt-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{metric.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
