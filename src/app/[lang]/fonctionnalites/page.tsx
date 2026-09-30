import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  Blocks,
  CheckSquare,
  Download,
  Feather,
  FileJson,
  FolderTree,
  Lightbulb,
  ListChecks,
  Search,
  WifiOff,
  Zap,
} from "lucide-react";
import CarteFonctionnalite from "@/components/CarteFonctionnalite";
import BoutonTelecharger from "@/components/BoutonTelecharger";
import { Separator } from "@/components/ui/separator";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue } from "@/lib/langues";
import { alternatesLangues } from "@/lib/site";

const iconesGroupes = [
  [ListChecks, Blocks, AlertTriangle, CheckSquare],
  [FolderTree, Blocks, Search],
  [Feather, Zap, WifiOff, FileJson, Lightbulb, Download],
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/fonctionnalites">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const t = await obtenirDictionnaire(lang);
  return {
    title: t.fonctionnalites.meta.titre,
    description: t.fonctionnalites.meta.description,
    alternates: alternatesLangues(lang, "/fonctionnalites"),
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/fonctionnalites">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = await obtenirDictionnaire(lang);
  const f = t.fonctionnalites;

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {f.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {f.titre}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{f.sousTitre}</p>
      </div>

      {f.groupes.map((groupe, i) => (
        <section key={groupe.titre} className="mt-20">
          {i > 0 && <Separator className="mb-20" />}
          <div className="mb-10">
            <p className="font-mono text-xs text-violet-600/80 dark:text-violet-400/80">
              {groupe.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {groupe.titre}
            </h2>
            <p className="mt-2 text-muted-foreground">{groupe.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groupe.items.map((item, j) => (
              <CarteFonctionnalite
                key={item.titre}
                icone={iconesGroupes[i][j]}
                titre={item.titre}
                description={item.description}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="mt-24 flex justify-center">
        <BoutonTelecharger
          href={`/${lang}/telecharger`}
          taille="lg"
          libelle={f.cta}
        />
      </div>
    </div>
  );
}
