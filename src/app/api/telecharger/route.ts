import { NextResponse } from "next/server";

const REPO = "yvankraft/vibechitech";
const URL_API = `https://api.github.com/repos/${REPO}/releases/latest`;
const URL_PAGE = `https://github.com/${REPO}/releases/latest`;

/**
 * GET /api/telecharger?fichier=<nom d'asset GitHub>
 * Résout l'asset dans la dernière release publiée et redirige vers
 * le binaire — le téléchargement démarre depuis le domaine du site.
 */
export async function GET(request: Request) {
  const fichier = new URL(request.url).searchParams.get("fichier");
  let cible = URL_PAGE;
  if (fichier) {
    try {
      const res = await fetch(URL_API, { next: { revalidate: 300 } });
      if (res.ok) {
        const release = await res.json();
        const asset = release.assets?.find(
          (a: { name: string }) => a.name === fichier,
        );
        if (asset) cible = asset.browser_download_url;
      }
    } catch {
      // API indisponible : repli sur la page Releases.
    }
  }
  return NextResponse.redirect(cible, 302);
}
