import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BoutonTelecharger({
  href,
  libelle,
  taille = "sm",
}: {
  href: string;
  libelle: string;
  taille?: "sm" | "default" | "lg";
}) {
  return (
    <Button render={<Link href={href} />} nativeButton={false} size={taille}>
      <Download />
      {libelle}
    </Button>
  );
}
