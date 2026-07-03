import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/for-customers", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/for-barbers", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
