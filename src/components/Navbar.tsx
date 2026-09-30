import Link from "next/link";
import type { Langue } from "@/lib/langues";
import type { Dictionnaire } from "@/dictionaries";
import BoutonTelecharger from "@/components/BoutonTelecharger";
import SelecteurLangue from "@/components/SelecteurLangue";

export default function Navbar({
  langue,
  t,
}: {
  langue: Langue;
  t: Dictionnaire["nav"];
}) {
  const liens = [
    { href: `/${langue}/fonctionnalites`, label: t.fonctionnalites },
    { href: `/${langue}/catalogue`, label: t.catalogue },
    { href: `/${langue}/docs`, label: t.docs },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href={`/${langue}`} className="group flex items-center gap-2.5">
          <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-sky-500 font-mono text-[11px] font-bold text-white">
            vc
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">
            vibe<span className="text-muted-foreground">/</span>chitech
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex">
          {liens.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="transition-colors hover:text-foreground"
            >
              {lien.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <SelecteurLangue langue={langue} />
          <BoutonTelecharger href={`/${langue}/telecharger`} libelle={t.telecharger} />
        </div>
      </nav>
    </header>
  );
}
