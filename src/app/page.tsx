import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { CapabilityGrid } from "@/components/sections/capability-grid";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUs } from "@/components/sections/why-us";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Technology, Research & Institutional Advisory",
  description:
    "A multidisciplinary practice working across technology, applied research, public-sector advisory, and strategic communications for government, NGO, academic and private-sector clients.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <WhoWeAre />
      <CapabilityGrid />
      <ServicesOverview />
      <WhyUs />
      <CtaSection />
    </>
  );
}
