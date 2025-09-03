import { realizationsData } from "./realizationsData";
import dynamic from "next/dynamic";

const Galeria = dynamic(() => import("./clientGaleria"), {
  ssr: false,
});

export async function generateMetadata() {
  const pageTitle = "Galeria Realizacji | MK Studio Auto Detailing Opole";
  const pageDescription =
    "Przeglądaj naszą galerię realizacji detailingowych: auto detailing, korekcja lakieru, pranie tapicerki, renowacja skór i folie PPF w Opolu.";
  const url = "/galeria";

  const ogImage =
    realizationsData[0]?.image?.src ||
    "/logo-mkstudio-auto-detailing-opole.jpg";
  const ogImageWidth = 1200;
  const ogImageHeight = 630;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: ogImage, width: ogImageWidth, height: ogImageHeight }],
      type: "website",
    },
  };
}

export default function GaleriaPage() {
  return <Galeria />;
}
