import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection({
  title = "Have an institutional problem that spans more than one discipline?",
  description = "Tell us about the challenge you're facing — we'll respond with which of our teams should be involved, and how we'd approach it.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-14 text-center text-white sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            {description}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Discuss a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/projects" size="lg" variant="ghost" className="border border-white/20 hover:border-white/40">
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
