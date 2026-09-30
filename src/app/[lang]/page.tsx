import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Feather,
  Gamepad2,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  Terminal,
  WifiOff,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CarteFonctionnalite from "@/components/CarteFonctionnalite";
import MockupApp from "@/components/MockupApp";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue } from "@/lib/langues";

const iconesTypes = [Gamepad2, Globe, Smartphone, Layers, Terminal, Sparkles];
const iconesFonctionnalites = [Feather, Zap, WifiOff, CheckCircle2];

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const t = await obtenirDictionnaire(lang);
  const a = t.accueil;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="fond-grille absolute inset-0" />
        <div className="lueur-hero absolute inset-0" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
          <Badge
            variant="outline"
            className="border-border bg-card font-mono text-[11px] font-normal text-muted-foreground"
          >
            {a.badge}
          </Badge>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tighter text-balance md:text-7xl">
            {a.titreA}
            <span className="texte-degrade block">{a.titreB}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-balance text-muted-foreground md:text-xl">
            {a.sousTitre}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href={`/${lang}/telecharger`} />}
              nativeButton={false}
              size="lg"
            >
              <Download />
              {a.ctaTelecharger}
            </Button>
            <Button
              render={<Link href={`/${lang}/catalogue`} />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              {a.ctaCatalogue}
              <ArrowRight />
            </Button>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground/70">
            {a.plateformes}
          </p>

          {/* Mockup produit */}
          <div className="mt-16 w-full">
            <MockupApp t={a.mockup} />
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {a.commentCaMarche.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          {a.commentCaMarche.titre}
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {a.etapes.map((etape, i) => (
            <div
              key={etape.titre}
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-accent"
            >
              <span className="font-mono text-sm text-violet-600/80 dark:text-violet-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium">{etape.titre}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {etape.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce que tu peux créer */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {a.creer.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          {a.creer.titre}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {a.creer.description}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {a.types.map((type, i) => (
            <CarteFonctionnalite
              key={type.titre}
              icone={iconesTypes[i]}
              titre={type.titre}
              description={type.detail}
            />
          ))}
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          {a.fonctionnalites.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          {a.fonctionnalites.titre}
        </h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.fonctionnalites.items.map((f, i) => {
            const Icone = iconesFonctionnalites[i];
            return (
              <div
                key={f.titre}
                className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-violet-500/40 hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <Icone className="size-5 text-violet-600 dark:text-violet-400" />
                  <span className="font-mono text-xl font-medium text-foreground/80">
                    {f.chiffre}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-medium">{f.titre}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* CTA final */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 text-center">
        <div className="lueur-hero absolute inset-0 opacity-60" />
        <div className="relative">
          <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
            {a.ctaFinal.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {a.ctaFinal.titre}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {a.ctaFinal.description}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              render={<Link href={`/${lang}/telecharger`} />}
              nativeButton={false}
              size="lg"
            >
              <Download />
              {a.ctaFinal.bouton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
