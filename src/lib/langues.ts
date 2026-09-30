export const langues = ["fr", "en", "de", "zh", "es"] as const;
export type Langue = (typeof langues)[number];
export const langueParDefaut: Langue = "fr";

export const nomsLangues: Record<Langue, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  zh: "中文",
  es: "Español",
};

export function estLangue(valeur: string): valeur is Langue {
  return (langues as readonly string[]).includes(valeur);
}
