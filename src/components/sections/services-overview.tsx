import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/content/site";

export function ServicesOverview() {
  const featured = services.slice(0, 6);
  return (
    <section className="section-pad">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="Services structured around institutional problems, not internal departments."
            className="max-w-xl"
          />
          <Button href="/services" variant="outline" className="shrink-0">
            View all services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
