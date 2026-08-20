import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { team, siteConfig } from "@/content/site";
import { GraduationCap } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/brand-icons";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((x) => x.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.title} at ${siteConfig.name}. ${member.bio}`,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = team.find((x) => x.slug === slug);
  if (!member) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    worksFor: { "@type": "Organization", name: siteConfig.name },
    description: member.bio,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={member.category}
        title={member.name}
        description={member.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
          { label: member.name },
        ]}
      />

      <section className="section-pad">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg border border-dashed border-border bg-surface font-mono text-xs uppercase tracking-wide text-muted">
              Professional Photograph
            </div>
            {member.linkedin && (
              <Button href={member.linkedin} variant="outline" size="sm" className="mt-4 w-full">
                <LinkedInIcon className="h-4 w-4" />
                View LinkedIn Profile
              </Button>
            )}
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-xl font-semibold text-heading">Biography</h2>
            <p className="mt-3 max-w-prose leading-relaxed text-body">{member.bio}</p>

            <h2 className="mt-10 font-display text-xl font-semibold text-heading">Area of expertise</h2>
            <p className="mt-3 max-w-prose leading-relaxed text-body">{member.expertise}</p>

            <h2 className="mt-10 flex items-center gap-2 font-display text-xl font-semibold text-heading">
              <GraduationCap className="h-5 w-5 text-accent-dark" aria-hidden="true" />
              Qualifications
            </h2>
            <ul className="mt-3 space-y-2">
              {member.qualifications.map((q) => (
                <li key={q} className="text-sm text-body">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
