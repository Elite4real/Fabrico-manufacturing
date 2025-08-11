export default function Benefits() {
  const bullets = [
    "Boosting factory output with real‑time scheduling.",
    "Customer production visibility and order tracking.",
    "Automated procurement with vendor updates.",
    "End‑to‑end traceability for audits.",
  ];

  return (
    <section id="benefits" className="bg-white">
      <div className="container-px mx-auto py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div className="card p-6">
          <div className="h-56 rounded-xl bg-[var(--ink-100)] flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold" style={{color:"var(--brand-700)"}}>+32%</div>
              <div className="text-black/60 text-sm">Higher Throughput</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-black/60">Key Benefits of Our System for</div>
          <h2 className="text-2xl font-bold">Your Business Efficiency</h2>
          <ul className="mt-5 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full"
                      style={{background:"var(--brand-300)"}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="var(--brand-700)" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="text-black/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
