import type { LucideIcon } from "lucide-react";

export default function CarteFonctionnalite({
  icone: Icone,
  titre,
  description,
}: {
  icone: LucideIcon;
  titre: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-violet-500/40 hover:bg-card">
      <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-accent">
        <Icone className="size-4 text-violet-600 dark:text-violet-400" />
      </div>
      <h3 className="mt-5 text-base font-medium">{titre}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
