import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { services, siteConfig } from "@/content/site";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: { "@type": "Organization", name: siteConfig.name },
    areaServed: "[Region / Country]",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={service.category}
        title={service.name}
        description={service.valueProposition}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="section-pad">
        <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/[0.06] text-primary">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-heading">The problem</h2>
              <p className="mt-3 leading-relaxed text-body">{service.problemStatement}</p>
              <h2 className="mt-8 font-display text-xl font-semibold text-heading">Overview</h2>
              <p className="mt-3 leading-relaxed text-body">{service.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-heading">Capabilities</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-heading">Typical applications</h2>
              <ul className="mt-4 space-y-2.5">
                {service.applications.map((a) => (
                  <li key={a} className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-body">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-heading">Approach &amp; methodology</h2>
              <ol className="mt-4 space-y-4">
                {service.approach.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-muted">0{i + 1}</span>
                    <p className="text-sm leading-relaxed text-body">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-heading">Expected outcomes</h2>
              <ul className="mt-4 space-y-2.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="card-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Who this is for</p>
              <ul className="mt-3 space-y-2 text-sm text-body">
                {service.targetOrganizations.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface bg-primary p-6 text-white">
              <h3 className="font-display text-lg font-semibold">Discuss this service</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Tell us about your context and we&apos;ll respond with next steps.
              </p>
              <Button href="/contact" variant="secondary" className="mt-5 w-full">
                Start a Conversation
              </Button>
            </div>
            {related.length > 0 && (
              <div className="card-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Related services</p>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="flex items-center justify-between text-sm font-medium text-heading hover:text-accent-dark"
                      >
                        {r.name}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
