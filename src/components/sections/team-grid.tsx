"use client";

import * as React from "react";
import { TeamCard } from "@/components/ui/team-card";
import { team, teamCategories } from "@/content/site";
import { cn } from "@/lib/utils";

export function TeamGrid() {
  const [active, setActive] = React.useState<(typeof teamCategories)[number]>("All");

  const filtered = active === "All" ? team : team.filter((m) => m.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter team by category"
        className="flex flex-wrap gap-2 border-b border-border pb-8"
      >
        {teamCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-body hover:border-primary/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-border p-12 text-center text-sm text-muted">
          No team members listed in this category yet.
        </div>
      )}
    </div>
  );
}
