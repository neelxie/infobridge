import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss a project, partnership, or general inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss a project"
        description="Whether you're evaluating a technology partner, exploring a research collaboration, or scoping an institutional program — tell us where you are, and we'll respond with next steps."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-pad">
        <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-xl font-semibold text-heading">Contact information</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-heading">Email</p>
                  <a href={`mailto:${siteConfig.contact.projectsEmail}`} className="text-sm text-muted hover:text-accent-dark">
                    {siteConfig.contact.projectsEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-heading">Phone</p>
                  <p className="text-sm text-muted">{siteConfig.contact.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-heading">Office</p>
                  <p className="text-sm text-muted">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}, {siteConfig.contact.address.country}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-heading">Business hours</p>
                  <p className="text-sm text-muted">{siteConfig.contact.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border bg-surface font-mono text-xs uppercase tracking-wide text-muted">
              Office Location Map
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted">
              What happens next: inquiries are reviewed by our team within two business days. We&apos;ll
              respond by email to confirm receipt and, where relevant, arrange an introductory call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
