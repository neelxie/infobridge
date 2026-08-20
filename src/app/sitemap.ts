import type { MetadataRoute } from "next";
import { siteConfig, services, team, caseStudies, insights } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/team",
    "/projects",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const teamRoutes = team.map((m) => ({
    url: `${siteConfig.url}/team/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const projectRoutes = caseStudies.map((c) => ({
    url: `${siteConfig.url}/projects/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${siteConfig.url}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes, ...projectRoutes, ...insightRoutes];
}
