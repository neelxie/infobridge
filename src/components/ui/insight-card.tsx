import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/content/site";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="card-surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-raised"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-dark">
          {insight.category}
        </span>
        <span className="text-xs text-muted">{insight.date}</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-heading">{insight.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{insight.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
