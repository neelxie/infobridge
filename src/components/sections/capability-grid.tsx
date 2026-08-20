import { SectionHeader } from "@/components/ui/section-header";
import { capabilities } from "@/content/site";

export function CapabilityGrid() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-content">
        <SectionHeader
          eyebrow="Core capabilities"
          title="Four disciplines. One team, one point of accountability."
          description="Each capability stands on its own — but the advantage for institutional clients comes from combining them under a single, coordinated practice."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <div key={cap.id} className="group relative bg-surface p-7 transition-colors hover:bg-background">
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-heading">{cap.label}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{cap.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          In practice, this means a single engagement can draw on{" "}
          <span className="text-heading">technology, research, policy and communications expertise</span>{" "}
          at once — without the coordination overhead of managing separate vendors.
        </p>
      </div>
    </section>
  );
}
