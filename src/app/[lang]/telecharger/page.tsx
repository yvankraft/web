import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetectionOS from "@/components/DetectionOS";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue } from "@/lib/langues";
import { alternatesLangues } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/telecharger">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const t = await obtenirDictionnaire(lang);
  return {
    title: t.telecharger.meta.titre,
    description: t.telecharger.meta.description,
    alternates: alternatesLangues(lang, "/telecharger"),
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/telecharger">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = await obtenirDictionnaire(lang);

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-24">
      <div className="text-center">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {t.telecharger.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {t.telecharger.titre}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.telecharger.sousTitre}</p>
      </div>
      <DetectionOS t={t.telecharger} />
    </div>
  );
}
