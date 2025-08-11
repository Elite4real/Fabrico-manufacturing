export default function Services() {
  const items = [
    "Production and MRP",
    "Custom Manufacturing",
    "Quality Control",
    "Procurement & Inventory",
    "Analytics & Insights",
    "Shop‑floor Execution",
  ];
  const desc =
    "Plan jobs, materials, routings, and capacity with real‑time visibility.";

  return (
    <section id="services" className="bg-[var(--ink-800)] text-white">
      <div className="container-px mx-auto py-10">
        <div className="text-center">
          <div className="text-sm text-white/70">Efficient and Integrated</div>
          <h2 className="text-lg font-semibold mt-1">Manufacturing Services</h2>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t) => (
            <div key={t} className="card-dark p-5">
              <div className="flex items-start gap-3">
                <span className="icon-chip">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16M12 4v16" stroke="white" strokeOpacity=".75" strokeWidth="1.5"/>
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
