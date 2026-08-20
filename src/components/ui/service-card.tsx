import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/service-icon";
import type { ServiceDetail } from "@/content/site";

export function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface group flex flex-col p-7 transition-all hover:-translate-y-0.5 hover:shadow-raised"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/[0.06] text-primary group-hover:bg-accent/10 group-hover:text-accent-dark">
        <ServiceIcon icon={service.icon} className="h-5 w-5" />
      </div>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
        {service.category}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-heading">
        {service.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
