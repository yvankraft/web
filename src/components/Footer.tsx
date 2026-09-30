import Link from "next/link";
import type { Langue } from "@/lib/langues";
import type { Dictionnaire } from "@/dictionaries";

function IconeGitHub({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Footer({
  langue,
  t,
  nav,
}: {
  langue: Langue;
  t: Dictionnaire["footer"];
  nav: Dictionnaire["nav"];
}) {
  const colonnes = [
    {
      titre: t.produit,
      liens: [
        { label: nav.fonctionnalites, href: `/${langue}/fonctionnalites` },
        { label: nav.catalogue, href: `/${langue}/catalogue` },
        { label: nav.telecharger, href: `/${langue}/telecharger` },
      ],
    },
    {
      titre: t.ressources,
      liens: [
        { label: t.documentation, href: `/${langue}/docs` },
        {
          label: "GitHub",
          href: "https://github.com/yvankraft/vibechitech",
          externe: true,
        },
        {
          label: "Releases",
          href: "https://github.com/yvankraft/vibechitech/releases/latest",
          externe: true,
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-sky-500 font-mono text-[11px] font-bold text-white">
                vc
              </span>
              <span className="font-mono text-sm font-medium tracking-tight">
                vibe<span className="text-muted-foreground">/</span>chitech
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.slogan}
            </p>
          </div>
          <div className="flex gap-16">
            {colonnes.map((colonne) => (
              <div key={colonne.titre}>
                <h3 className="font-mono text-[11px] tracking-wider text-muted-foreground/70 uppercase">
                  {colonne.titre}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {colonne.liens.map((lien) => (
                    <li key={lien.label}>
                      {"externe" in lien && lien.externe ? (
                        <a
                          href={lien.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {lien.label === "GitHub" && (
                            <IconeGitHub className="size-3.5" />
                          )}
                          {lien.label}
                        </a>
                      ) : (
                        <Link
                          href={lien.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {lien.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-[11px] text-muted-foreground/70">
            {t.copyright}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}
