"use client";

import { useEffect, useState } from "react";
import { Apple, AppWindow, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Dictionnaire } from "@/dictionaries";

type OS = "windows" | "macos" | "linux" | "inconnu";

const REPO = "yvankraft/vibechitech";
const URL_RELEASES = `https://github.com/${REPO}/releases/latest`;
const URL_API = `https://api.github.com/repos/${REPO}/releases/latest`;

interface Asset {
  name: string;
  url: string;
}

const fichiers: {
  os: Exclude<OS, "inconnu">;
  nom: string;
  format: string;
  icone: typeof AppWindow;
}[] = [
    { os: "windows", nom: "Windows", format: ".msi", icone: AppWindow },
    { os: "macos", nom: "macOS", format: ".dmg", icone: Apple },
    { os: "linux", nom: "Linux", format: ".AppImage / .deb", icone: Terminal },
  ];

function detecterOS(): OS {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux")) return "linux";
  return "inconnu";
}

function assetsPourOS(assets: Asset[], os: Exclude<OS, "inconnu">): Asset[] {
  const filtre =
    os === "windows"
      ? (n: string) => n.endsWith(".msi") || n.endsWith(".exe")
      : os === "macos"
        ? (n: string) => n.endsWith(".dmg")
        : (n: string) =>
          n.endsWith(".AppImage") || n.endsWith(".deb");
  return assets.filter((a) => filtre(a.name));
}

function labelAsset(nom: string): string {
  if (nom.includes("aarch64") || nom.includes("arm64")) return "Apple Silicon";
  if (nom.includes("x64") && nom.endsWith(".dmg")) return "Intel";
  return nom.slice(nom.lastIndexOf("."));
}

export default function DetectionOS({
  t,
}: {
  t: Dictionnaire["telecharger"];
}) {
  const [os, setOS] = useState<OS>("inconnu");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    setOS(detecterOS());
    fetch(URL_API)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((release) => {
        setVersion(release.tag_name ?? null);
        setAssets(
          (release.assets ?? []).map(
            (a: { name: string; browser_download_url: string }) => ({
              name: a.name,
              url: a.browser_download_url,
            }),
          ),
        );
      })
      .catch(() => {
        // Pas de release ou API indisponible : repli sur la page Releases.
      });
  }, []);

  const fichierDetecte = fichiers.find((f) => f.os === os);

  return (
    <div className="w-full space-y-8">
      {fichierDetecte && (
        <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm">
          {t.detectePrefixe} <strong>{fichierDetecte.nom}</strong> —{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            {fichierDetecte.format}
          </code>{" "}
          {t.detecteSuffixe}
        </div>
      )}

      {version && (
        <p className="text-center font-mono text-xs text-muted-foreground">
          {version}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        {fichiers.map((fichier) => {
          const Icone = fichier.icone;
          const recommande = fichier.os === os;
          const cibles = assetsPourOS(assets, fichier.os);
          return (
            <div
              key={fichier.os}
              className={`flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-6 text-center transition-colors ${recommande
                ? "border-violet-500/50 ring-1 ring-violet-500/30"
                : ""
                }`}
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent">
                <Icone className="size-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 font-medium">
                  {fichier.nom}
                  {recommande && (
                    <Badge className="border-0 bg-violet-500/20 text-violet-600 dark:text-violet-300">
                      {t.badgeDetecte}
                    </Badge>
                  )}
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  {fichier.format}
                </p>
              </div>
              {cibles.length > 0 ? (
                <div className="mt-2 flex w-full flex-col gap-2">
                  {cibles.map((cible) => (
                    <Button
                      key={cible.name}
                      render={
                        <a
                          href={`/api/telecharger?fichier=${encodeURIComponent(cible.name)}`}
                        />
                      }
                      nativeButton={false}
                      className="w-full"
                    >
                      <Download />
                      {t.bouton} — {labelAsset(cible.name)}
                    </Button>
                  ))}
                </div>
              ) : (
                <Button
                  render={
                    <a
                      href={URL_RELEASES}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  className="mt-2 w-full"
                >
                  <Download />
                  {t.bouton}
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {t.macosAstuce}{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
          xattr -cr /Applications/vibeChitech.app
        </code>
      </p>

      <p className="text-center text-sm text-muted-foreground">
        {t.basTexte}{" "}
        <a
          href={URL_RELEASES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 underline-offset-4 hover:underline dark:text-violet-400"
        >
          {t.basLien}
        </a>
        . {t.basSuffixe}
      </p>
    </div>
  );
}
