import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight",
        dark ? "text-white" : "text-heading",
        className
      )}
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="6" r="2.4" fill={dark ? "#FFFFFF" : "#0F2A43"} />
        <circle cx="5" cy="19" r="2.4" fill="#0E7C74" />
        <circle cx="21" cy="19" r="2.4" fill="#0E7C74" />
        <path
          d="M13 8.4 L6.2 17.4 M13 8.4 L19.8 17.4 M7.4 19 L18.6 19"
          stroke={dark ? "#FFFFFF" : "#0F2A43"}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <span>{siteConfig.shortName === "[Short Name]" ? siteConfig.name : siteConfig.shortName}</span>
    </span>
  );
}
