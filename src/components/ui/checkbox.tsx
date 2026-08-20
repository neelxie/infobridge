import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "peer h-5 w-5 shrink-0 appearance-none rounded-[4px] border border-border bg-surface transition-colors",
          "checked:border-accent checked:bg-accent",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
          className
        )}
        {...props}
      />
      <Check
        className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100"
        strokeWidth={3}
        aria-hidden="true"
      />
    </span>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
