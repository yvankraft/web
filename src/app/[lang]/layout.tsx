import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue, langues, type Langue } from "@/lib/langues";
import { alternatesLangues, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return langues.map((langue) => ({ lang: langue }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const langue = estLangue(lang) ? lang : "fr";
  const t = await obtenirDictionnaire(langue);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.meta.titre,
      template: "%s — vibeChitech",
    },
    description: t.meta.description,
    keywords: [
      "vibeChitech",
      "roadmap",
      "configurateur de projet",
      "project checklist",
      "développeur",
      "Tauri",
      "offline",
      "IA de code",
      "coding assistant",
    ],
    alternates: alternatesLangues(langue),
    openGraph: {
      title: "vibeChitech — " + t.meta.titre,
      description: t.meta.description,
      url: `${siteUrl}/${langue}`,
      siteName: "vibeChitech",
      type: "website",
      locale: langue,
    },
    twitter: {
      card: "summary_large_image",
      title: "vibeChitech",
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LayoutRacine({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();
  const langue: Langue = lang;
  const t = await obtenirDictionnaire(langue);

  return (
    <html
      lang={langue}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar langue={langue} t={t.nav} />
        <main className="flex-1">{children}</main>
        <Footer langue={langue} t={t.footer} nav={t.nav} />
      </body>
    </html>
  );
}
