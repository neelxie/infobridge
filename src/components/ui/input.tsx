import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-[6px] border bg-surface px-3.5 text-sm text-heading placeholder:text-muted transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:border-accent",
          invalid ? "border-error" : "border-border",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
