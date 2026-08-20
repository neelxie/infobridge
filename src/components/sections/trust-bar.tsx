import { trustStats } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-content py-10 sm:py-12">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:text-left">
          Trusted across sectors — partner and client information published as it becomes available
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-semibold text-heading sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-8 sm:justify-start">
          {["[Partner Logo]", "[Client Logo]", "[Institutional Affiliation]", "[Certification]", "[Partner Logo]"].map(
            (label, i) => (
              <div
                key={i}
                className="flex h-10 w-32 items-center justify-center rounded border border-dashed border-border font-mono text-[10px] uppercase tracking-wide text-muted"
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
