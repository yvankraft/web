"use client";

import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { langues, nomsLangues, type Langue } from "@/lib/langues";

export default function SelecteurLangue({ langue }: { langue: Langue }) {
  const pathname = usePathname();

  function changer(nouvelle: string) {
    const segments = pathname.split("/");
    segments[1] = nouvelle;
    window.location.href = segments.join("/");
  }

  return (
    <label className="relative flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground">
      <Globe className="size-3.5" />
      <span className="sr-only">Langue</span>
      <select
        value={langue}
        onChange={(e) => changer(e.target.value)}
        className="cursor-pointer appearance-none bg-transparent text-[13px] uppercase outline-none"
        aria-label="Choisir la langue"
      >
        {langues.map((l) => (
          <option key={l} value={l} className="bg-background text-foreground">
            {l.toUpperCase()} — {nomsLangues[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
