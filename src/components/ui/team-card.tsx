import Link from "next/link";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import type { TeamMember } from "@/content/site";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="card-surface group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-raised"
    >
      <div className="relative flex aspect-[4/5] items-center justify-center bg-primary/[0.05]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-primary/25 font-mono text-[10px] uppercase tracking-wide text-muted">
          Photo
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-dark shadow-subtle">
          {member.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-heading">{member.name}</h3>
        <p className="mt-0.5 text-sm text-muted">{member.title}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body line-clamp-3">{member.bio}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs font-medium text-accent-dark group-hover:underline">View profile</span>
          <LinkedInIcon className="h-4 w-4 text-muted" />
        </div>
      </div>
    </Link>
  );
}
