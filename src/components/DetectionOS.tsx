"use client";

import { useEffect, useState } from "react";
import { Apple, AppWindow, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Dictionnaire } from "@/dictionaries";

type OS = "windows" | "macos" | "linux" | "inconnu";

const URL_RELEASES = "https://github.com/USER/vibechitech/releases/latest";

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

export default function DetectionOS({ t }: { t: Dictionnaire["telecharger"] }) {
  const [os, setOS] = useState<OS>("inconnu");

  useEffect(() => {
    setOS(detecterOS());
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

      <div className="grid gap-4 sm:grid-cols-3">
        {fichiers.map((fichier) => {
          const Icone = fichier.icone;
          const recommande = fichier.os === os;
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
            </div>
          );
        })}
      </div>

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
