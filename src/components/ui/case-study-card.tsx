import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/projects/${study.slug}`}
      className="card-surface group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-raised"
    >
      <div className="flex aspect-[16/9] items-center justify-center border-b border-border bg-primary/[0.05] font-mono text-[10px] uppercase tracking-wide text-muted">
        Project Visual
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-dark">{study.sector}</p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-heading">{study.title}</h3>
        <p className="mt-2 text-sm text-muted">{study.client}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body line-clamp-2">{study.challenge}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark">
          Read the case study
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
