import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect information submitted through this website.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "[Description of the personal information collected through this website — e.g. contact form submissions, analytics data, cookies — to be finalized by the company's legal counsel.]",
  },
  {
    title: "2. How we use information",
    body: "[Description of how submitted information is used — e.g. to respond to inquiries, improve the website, comply with legal obligations.]",
  },
  {
    title: "3. Legal basis for processing",
    body: "[Applicable legal basis for processing personal data under relevant data protection law, e.g. consent, legitimate interest.]",
  },
  {
    title: "4. Sharing of information",
    body: "[Description of any third parties information may be shared with, e.g. service providers, and the safeguards in place.]",
  },
  {
    title: "5. Data retention",
    body: "[Description of how long information is retained and the criteria used to determine retention periods.]",
  },
  {
    title: "6. Your rights",
    body: "[Description of the individual's rights regarding their data — e.g. access, correction, deletion — and how to exercise them.]",
  },
  {
    title: "7. Cookies",
    body: "[Description of cookies or similar technologies used on this website, if any.]",
  },
  {
    title: "8. Contact",
    body: `Questions about this policy can be directed to ${siteConfig.contact.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: [Date]. This policy explains how we handle information submitted through this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
