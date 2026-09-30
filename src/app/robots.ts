import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const crawlersIA = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Amazonbot",
  "Applebot-Extended",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Crawlers IA explicitement autorisés — le contenu du site
      // (catalogue, docs) est fait pour être lu par les assistants.
      { userAgent: crawlersIA, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
