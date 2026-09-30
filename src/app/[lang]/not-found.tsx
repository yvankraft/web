import Link from "next/link";
import { lang } from "next/root-params";
import { Button } from "@/components/ui/button";
import { obtenirDictionnaire } from "@/dictionaries";
import { estLangue, langueParDefaut } from "@/lib/langues";

export default async function NonTrouve() {
  const langueBrute = await lang();
  const langue = estLangue(langueBrute) ? langueBrute : langueParDefaut;
  const t = await obtenirDictionnaire(langue);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-32 text-center">
      <p className="font-mono text-6xl font-semibold text-violet-600 dark:text-violet-400">
        404
      </p>
      <h1 className="text-2xl font-semibold">{t.nonTrouve.titre}</h1>
      <p className="text-muted-foreground">{t.nonTrouve.description}</p>
      <Button render={<Link href={`/${langue}`} />} nativeButton={false}>
        {t.nonTrouve.retour}
      </Button>
    </div>
  );
}
