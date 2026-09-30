import type { Metadata } from "next";
import { langueParDefaut, langues, type Langue } from "@/lib/langues";

/**
 * URL canonique du site (sous-domaine de yvancorps.fr, déployé sur Vercel).
 * Surchargeable via NEXT_PUBLIC_SITE_URL si le domaine change.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibechitech.yvancorps.com";

/**
 * Alternates hreflang pour une page : toutes les locales + x-default.
 * `chemin` = le segment après la locale (ex : "/telecharger").
 */
export function alternatesLangues(
  langue: Langue,
  chemin = "",
): Metadata["alternates"] {
  return {
    canonical: `${siteUrl}/${langue}${chemin}`,
    languages: {
      ...Object.fromEntries(
        langues.map((l) => [l, `${siteUrl}/${l}${chemin}`]),
      ),
      "x-default": `${siteUrl}/${langueParDefaut}${chemin}`,
    },
  };
}
