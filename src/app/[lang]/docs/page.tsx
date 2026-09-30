import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckSquare,
  Download,
  FileJson,
  FolderPlus,
  ListChecks,
  Rocket,
  Search,
  Settings,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue } from "@/lib/langues";
import { alternatesLangues } from "@/lib/site";

const iconesSections = [
  Download,
  FolderPlus,
  ListChecks,
  Search,
  FileJson,
  Settings,
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/docs">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const t = await obtenirDictionnaire(lang);
  return {
    title: t.docs.meta.titre,
    description: t.docs.meta.description,
    alternates: alternatesLangues(lang, "/docs"),
  };
}

export default async function Page({ params }: PageProps<"/[lang]/docs">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = await obtenirDictionnaire(lang);
  const d = t.docs;

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div>
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {d.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {d.titre}
        </h1>
        <p className="mt-4 text-muted-foreground">{d.sousTitre}</p>
      </div>

      <div className="mt-14 space-y-12">
        {d.sections.map((section, i) => {
          const Icone = iconesSections[i];
          return (
            <section key={section.titre}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-accent">
                  <Icone className="size-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h2 className="text-xl font-semibold">{section.titre}</h2>
              </div>
              <ul className="space-y-2.5 border-l border-border pl-6">
                {section.contenu.map((ligne, j) => (
                  <li
                    key={j}
                    className="relative text-muted-foreground before:absolute before:-left-[27px] before:top-2.5 before:size-1.5 before:rounded-full before:bg-violet-500/50"
                  >
                    {ligne}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Separator className="my-12" />

      <div className="flex flex-col items-center gap-4 text-center">
        <Rocket className="size-6 text-violet-600 dark:text-violet-400" />
        <p className="text-muted-foreground">
          {d.aide}{" "}
          <a
            href="https://github.com/yvankraft/vibechitech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 underline-offset-4 hover:underline dark:text-violet-400"
          >
            {d.aideLien}
          </a>
          {d.aideOu}{" "}
          <Link
            href={`/${lang}/telecharger`}
            className="text-violet-600 underline-offset-4 hover:underline dark:text-violet-400"
          >
            {d.aideTelecharger}
          </Link>{" "}
          {d.aideFin}
        </p>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/70">
          <CheckSquare className="size-4" />
          {d.version}
        </div>
      </div>
    </div>
  );
}
