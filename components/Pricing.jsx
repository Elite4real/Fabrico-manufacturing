function Plan({ title, price, features = [], dark = false }) {
  return (
    <div className={`rounded-2xl border p-6 text-white ${dark ? "bg-[var(--ink-900)] border-white/10" : "bg-[var(--ink-800)] border-white/10"}`}>
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-1 text-3xl font-bold">
        ${price}<span className="text-base text-white/60">/mo</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2"/>
              </svg>
            </span>
            <span className="text-white/80">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="btn w-full mt-5 bg-white text-[var(--ink-800)] hover:bg-white/90">Choose Plan</a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--ink-800)]">
      <div className="container-px mx-auto py-14">
        <div className="text-center text-white">
          <div className="text-xs text-white/70">Tailored Plans for Your</div>
          <h2 className="text-lg font-semibold">Manufacturing Scale</h2>
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6 mt-8">
          <Plan
            title="SMEs"
            price="59"
            features={["Up to 5 work centers","Basic MRP & Scheduling","Email support"]}
          />
          <Plan
            title="Enterprise"
            price="599"
            features={["Unlimited work centers","Advanced APS & SPC","24/7 priority support"]}
            dark
          />
        </div>

        <div className="mx-auto max-w-xl mt-8">
          <div className="rounded-2xl text-white px-6 py-5 text-center shadow-soft"
               style={{background:"var(--brand-600)"}}>
            <div className="text-sm opacity-90">Implementation</div>
            <a href="#" className="mt-3 inline-flex items-center rounded-lg bg-white text-[var(--ink-800)] px-4 py-2 text-sm font-semibold hover:bg-white/90">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
