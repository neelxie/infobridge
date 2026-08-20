import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/brand-icons";
import { Logo } from "@/components/ui/logo";
import { siteConfig, footerNav, services } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const serviceLinks = services.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-primary-dark text-white/80">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent-light"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent-light"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
