export default function Integrations() {
  const logos = ["ERP", "MES", "QA", "WMS", "IoT", "PLM", "SCM", "BI", "EAM"];

  const points = [
    "Pre-built connectors for core manufacturing systems",
    "Two-way sync with retry & conflict handling",
    "Secure REST webhooks with key rotation",
    "Role-based access and audit trails",
  ];

  return (
    <section id="integrations" className="bg-white">
      <div className="container-px mx-auto py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div className="max-w-xl">
            <div className="badge mb-3">Integrations</div>
            <h3 className="text-2xl font-bold leading-tight">
              Seamless integrations for your stack
            </h3>
            <p className="mt-3 text-black/70">
              Connect ERP, MES, QA, and warehouse systems alongside finance tools and IoT devices.
              Keep data consistent across planning, production, and analytics—without glue code.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-100)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="var(--brand-700)" strokeWidth="2" />
                    </svg>
                  </span>
                  <span className="text-black/80">{t}</span>
                </li>
              ))}
            </ul>

            {/* SDKs / tools chips */}
            <div className="mt-7">
              <div className="text-xs uppercase tracking-wide text-black/50">SDKs & Tools</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Node.js", "Python", "PHP", "Go", "REST API", "Webhooks"].map((x) => (
                  <span
                    key={x}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="btn btn-primary">View API Docs</a>
              <a href="#" className="btn btn-ghost">See All Integrations</a>
            </div>

            {/* small credibility strip */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                ["9+", "Prebuilt"],
                ["2-way", "Sync"],
                ["ISO", "Controls"],
              ].map(([k, v]) => (
                <div key={v} className="card p-3">
                  <div className="text-base font-semibold">{k}</div>
                  <div className="text-[11px] text-black/60">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right logo grid */}
          <div className="card p-6">
            {/* optional header row inside the card */}
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-black/70">Popular connectors</div>
              <a href="#" className="text-xs text-black/50 hover:text-black/70">Browse all →</a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {logos.map((x) => (
                <button
                  key={x}
                  type="button"
                  aria-label={`${x} connector`}
                  className="group relative aspect-square rounded-xl border border-black/5 bg-[var(--ink-100)] p-3 text-black/70 transition
                             hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide">{x}</span>
                  </div>

                  {/* hover accent + meta strip */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                       style={{ background: "radial-gradient(80% 80% at 50% 50%, rgba(47,124,114,.08), transparent 70%)" }} />

                  <div className="absolute inset-x-2 bottom-2 hidden items-center justify-between rounded-md bg-white/90 px-2 py-1 text-[10px] text-black/70 shadow group-hover:flex">
                    <span>Connector</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-600)]" />
                      REST
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* foot note row */}
            <div className="mt-5 rounded-xl bg-[var(--ink-100)] px-4 py-3 text-[13px] text-black/70">
              Need a custom system? We provide adapter templates and a sandbox for rapid connector builds.
              <a href="#" className="ml-2 font-medium text-[var(--brand-700)] hover:underline">Start a custom integration</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
