import "server-only";
import type { Langue } from "@/lib/langues";
import type { Dictionnaire } from "./fr";

const chargeurs: Record<Langue, () => Promise<Dictionnaire>> = {
  fr: () => import("./fr").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
};

export async function obtenirDictionnaire(langue: Langue): Promise<Dictionnaire> {
  return chargeurs[langue]();
}

export type { Dictionnaire };
