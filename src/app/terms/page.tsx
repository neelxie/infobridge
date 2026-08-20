import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of this website.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: `By accessing this website, you agree to be bound by these Terms of Use and all applicable laws. If you do not agree, please do not use this website. [To be finalized by ${siteConfig.legalName}'s legal counsel.]`,
  },
  {
    title: "2. Use of content",
    body: "[Terms governing use, reproduction and distribution of the content on this website.]",
  },
  {
    title: "3. Intellectual property",
    body: "[Statement of ownership over trademarks, logos, and original content published on this website.]",
  },
  {
    title: "4. No professional advice",
    body: "[Disclaimer clarifying that website content does not constitute professional, legal, or financial advice.]",
  },
  {
    title: "5. Limitation of liability",
    body: "[Standard limitation of liability clause, to be drafted by legal counsel.]",
  },
  {
    title: "6. Governing law",
    body: "[Statement of the governing jurisdiction for these terms.]",
  },
  {
    title: "7. Changes to these terms",
    body: "We may update these Terms of Use from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Contact",
    body: `Questions about these terms can be directed to ${siteConfig.contact.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Last updated: [Date]. These terms govern your use of this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />
      <section className="section-pad">
        <div className="container-content max-w-prose space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-semibold text-heading">{s.title}</h2>
              <p className="mt-2.5 leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
          <p className="rounded-md border border-dashed border-border bg-surface p-4 text-xs text-muted">
            This page is placeholder legal structure only. It has not been reviewed by legal counsel and
            must be finalized before publication.
          </p>
        </div>
      </section>
    </>
  );
}
