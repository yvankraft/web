import {
  Boxes,
  Check,
  ChevronDown,
  Gamepad2,
  LayoutGrid,
  Plus,
  Search,
  Settings,
  TriangleAlert,
} from "lucide-react";
import type { Dictionnaire } from "@/dictionaries";

// Le mockup reste volontairement en thème sombre : c'est un aperçu
// de l'app desktop (qui est sombre), comme les captures produit de devin.ai.

const progressions = [100, 100, 60, 0, 0];
const compteurs = ["4/4", "5/5", "3/5", "0/6", "0/5"];

export default function MockupApp({
  t,
}: {
  t: Dictionnaire["accueil"]["mockup"];
}) {
  return (
    <div className="fenetre-app bord-lumineux relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl bg-[#0d0d10] text-left">
      {/* Barre de titre façon fenêtre macOS */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto truncate font-mono text-[11px] text-white/40">
          {t.fenetre}
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-white/8 p-3 sm:flex">
          <div className="mb-2 flex items-center gap-2 px-2">
            <Boxes className="size-4 text-violet-400" />
            <span className="text-xs font-semibold text-white/90">
              vibeChitech
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-violet-500/15 px-2 py-1.5 text-[11px] font-medium text-violet-300">
            <LayoutGrid className="size-3.5" />
            {t.projets}
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-white/45">
            <Search className="size-3.5" />
            {t.recherche}
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-white/45">
            <Settings className="size-3.5" />
            {t.parametres}
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-md border border-white/10 px-2 py-1.5 text-[11px] text-white/60">
            <Plus className="size-3.5" />
            {t.nouveau}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="min-w-0 flex-1 p-4">
          {/* En-tête projet */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="size-4 text-violet-400" />
              <h3 className="text-sm font-semibold text-white">
                {t.fenetre.split("— ")[1]}
              </h3>
            </div>
            <p className="mt-1 font-mono text-[10px] text-white/40">{t.stack}</p>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
              </div>
              <span className="font-mono text-[10px] text-white/50">38%</span>
            </div>
          </div>

          {/* Phases */}
          <div className="space-y-1.5">
            {t.phases.map((titre, i) => {
              const ouverte = i === 2;
              return (
                <div
                  key={titre}
                  className="rounded-lg border border-white/8 bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2.5 px-3 py-2">
                    <ChevronDown
                      className={`size-3.5 text-white/40 transition-transform ${ouverte ? "" : "-rotate-90"
                        }`}
                    />
                    <span className="flex-1 text-[12px] font-medium text-white/80">
                      {titre}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">
                      {compteurs[i]}
                    </span>
                    <div className="h-1 w-14 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-violet-500"
                        style={{ width: `${progressions[i]}%` }}
                      />
                    </div>
                  </div>

                  {ouverte && (
                    <div className="space-y-1 border-t border-white/8 px-3 py-2">
                      {t.etapes.map((etape, j) => {
                        const faite = j < 2;
                        return (
                          <div
                            key={etape}
                            className="flex items-center gap-2 rounded px-1.5 py-1 text-[11px] text-white/60"
                          >
                            <span
                              className={`flex size-3.5 items-center justify-center rounded border ${faite
                                  ? "border-violet-500 bg-violet-500"
                                  : "border-white/20"
                                }`}
                            >
                              {faite && <Check className="size-2.5 text-white" />}
                            </span>
                            <span
                              className={faite ? "text-white/35 line-through" : ""}
                            >
                              {etape}
                            </span>
                          </div>
                        );
                      })}
                      <div className="mt-1.5 flex items-start gap-2 rounded-md border border-orange-400/20 bg-orange-400/8 px-2.5 py-2">
                        <TriangleAlert className="mt-0.5 size-3 shrink-0 text-orange-400" />
                        <p className="text-[10px] leading-relaxed text-orange-200/80">
                          {t.piege}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
