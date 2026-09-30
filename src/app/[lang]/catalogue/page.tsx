import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { catalogueApercu } from "@/data/catalogue";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue } from "@/lib/langues";
import { alternatesLangues } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/catalogue">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const t = await obtenirDictionnaire(lang);
  return {
    title: t.catalogue.meta.titre,
    description: t.catalogue.meta.description,
    alternates: alternatesLangues(lang, "/catalogue"),
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/catalogue">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = await obtenirDictionnaire(lang);
  const total = catalogueApercu.reduce(
    (acc, cat) => acc + cat.elements.length,
    0,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {t.catalogue.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {total}+ {t.catalogue.titre}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.catalogue.sousTitre}</p>
      </div>

      <div className="mt-16 space-y-12">
        {catalogueApercu.map((categorie) => {
          const meta = t.catalogue.categories[categorie.id];
          return (
            <section key={categorie.id}>
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {meta?.nom ?? categorie.nom}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {meta?.description ?? categorie.description}
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {categorie.elements.length}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-card/50 p-6">
                {categorie.elements.map((element) => (
                  <Badge
                    key={element}
                    variant="outline"
                    className="border-border bg-accent/50 text-foreground/80"
                  >
                    {element}
                  </Badge>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Separator className="my-12" />
      <p className="text-center text-sm text-muted-foreground">
        {t.catalogue.noteBas}
      </p>
    </div>
  );
}
