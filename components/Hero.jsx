import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[var(--ink-100)]">
      {/* soft radial accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-64 w-[92%] rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_18%,rgba(47,124,114,.10),transparent_70%)]" />
      </div>

      <div className="container-px mx-auto max-w-6xl pt-16 pb-12">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge mx-auto mb-4 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-600)]" />
            AI-Assisted Scheduling
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The Future of Manufacturing
            <span className="block text-black/70">with Latest Technology</span>
          </h1>

          <p className="mt-4 text-black/60">
            Plan, track, and optimize from procurement to shop-floor execution.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              className="btn btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-400)]"
              href="#pricing"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" className="-ml-1 mr-2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Start Free Trial
            </a>

            <a
              className="btn btn-ghost border border-black/10 hover:border-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              href="#demo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" className="-ml-1 mr-2" aria-hidden="true">
                <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
              </svg>
              Request Demo
            </a>
          </div>

          {/* quick feature chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Real-time MRP", "Shop-floor kiosks", "Barcode & IoT", "ISO 9001-ready"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

    {/* Visual + Stats */}
<div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.25fr,1fr]">
  {/* Image card */}
  <div className="card relative overflow-hidden">
    {/* subtle vignette + brand glow */}
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(47,124,114,.18),transparent)]" />
    </div>

    <div className="relative w-full h-[260px] md:h-[320px]">
      <Image
        src="/unnamed.png"
        alt="Factory dashboard preview"
        fill
        sizes="(min-width:1024px) 650px, 100vw"
        className="object-cover"
        priority
      />
    </div>

    {/* top-left live badge */}
    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-white/85 px-3 py-1.5 text-[11px] text-black/70 shadow">
      <span className="h-2 w-2 rounded-full bg-[var(--brand-600)]" />
      Live feed
    </div>

    {/* bottom gradient for caption readability */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/85 to-transparent" />

    {/* caption strip */}
    <div className="absolute left-4 bottom-3 flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-[11px] text-black/70 shadow">
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h6l2-4 8 0-4 8H8z" fill="currentColor" />
      </svg>
      Real-time shop-floor telemetry
    </div>
  </div>

  {/* Stats column (pro metrics with deltas) */}
  <div className="grid gap-4">
    {[
      {
        k: "99.9%",
        v: "Production Uptime",
        delta: "+0.3%",
        up: true,
        icon: <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" fill="none" />,
      },
      {
        k: "15k+",
        v: "Monthly Orders",
        delta: "+2.1k",
        up: true,
        icon: <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" fill="none" />,
      },
      {
        k: "6+",
        v: "Integrations",
        delta: "+1",
        up: true,
        icon: (
          <path
            d="M7 7l10 10M7 17L17 7"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          />
        ),
      },
    ].map((s) => (
      <div
        key={s.v}
        className="card group relative overflow-hidden p-5 transition hover:shadow-soft"
      >
        {/* row: label+icon left, value right */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--ink-100)] text-[var(--brand-700)]">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                {s.icon}
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-xs text-black/60 truncate">{s.v}</div>
              <div className="mt-1 flex items-center gap-2 text-[11px]">
                <span className={`inline-flex items-center gap-1 font-medium ${s.up ? "text-[var(--brand-700)]" : "text-red-600"}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d={s.up ? "M12 6l6 6H6l6-6z" : "M12 18l6-6H6l6 6z"}
                      fill="currentColor"
                    />
                  </svg>
                  {s.delta}
                </span>
                <span className="text-black/50">vs last month</span>
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold tracking-tight">{s.k}</div>
        </div>

        {/* hover accent */}
        <div className="pointer-events-none absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-[radial-gradient(closest-side,rgba(47,124,114,.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    ))}
  </div>
</div>

        {/* trust logos strip */}
        <div className="mt-10">
          <div className="text-center text-xs uppercase tracking-wide text-black/50">Trusted by teams</div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {["Acme Steel", "Northline", "PrimeFab", "Helix QA", "OmniWMS", "Nova IoT"].map((x) => (
              <div
                key={x}
                className="rounded-lg border border-black/10 bg-white px-3 py-2 text-center text-[11px] text-black/60"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
