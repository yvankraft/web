import type { MetadataRoute } from "next";
import { langueParDefaut, langues } from "@/lib/langues";
import { siteUrl } from "@/lib/site";

const chemins = ["", "/catalogue", "/docs", "/fonctionnalites", "/telecharger"];

export default function sitemap(): MetadataRoute.Sitemap {
  return langues.flatMap((langue) =>
    chemins.map((chemin) => ({
      url: `${siteUrl}/${langue}${chemin}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: chemin === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(
            langues.map((l) => [l, `${siteUrl}/${l}${chemin}`]),
          ),
          "x-default": `${siteUrl}/${langueParDefaut}${chemin}`,
        },
      },
    })),
  );
}
