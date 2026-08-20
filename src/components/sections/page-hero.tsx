import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { NodeField } from "@/components/ui/node-field";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <NodeField className="absolute inset-0 opacity-[0.25]" />
      <div className="container-content relative py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow !text-accent-light mb-4">{eyebrow}</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
