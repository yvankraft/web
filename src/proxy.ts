import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { langues, langueParDefaut, type Langue } from "@/lib/langues";

function languePreferee(requete: NextRequest): Langue {
  const acceptLanguage = requete.headers.get("accept-language") ?? "";
  const preferences = acceptLanguage
    .split(",")
    .map((partie) => {
      const [tag, q] = partie.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number.parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const pref of preferences) {
    const base = pref.tag.split("-")[0];
    if ((langues as readonly string[]).includes(base)) {
      return base as Langue;
    }
  }
  return langueParDefaut;
}

export function proxy(requete: NextRequest) {
  const { pathname } = requete.nextUrl;

  const aUneLangue = langues.some(
    (langue) => pathname === `/${langue}` || pathname.startsWith(`/${langue}/`),
  );
  if (aUneLangue) return;

  const langue = languePreferee(requete);
  requete.nextUrl.pathname = `/${langue}${pathname}`;
  return NextResponse.redirect(requete.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
