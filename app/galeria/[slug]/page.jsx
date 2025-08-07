import { notFound } from "next/navigation";
import { realizationsData } from "../realizationsData";
import GaleriaClient from "./GaleriaClient";

export async function generateStaticParams() {
  if (!realizationsData || !Array.isArray(realizationsData)) {
    console.error(
      "realizationsData nie jest tablicą lub jest niezdefiniowane w generateStaticParams"
    );
    return [];
  }
  console.log(
    "generateStaticParams - identyfikatory realizacji:",
    realizationsData.map((r) => r.id)
  );

  return realizationsData.map((realization) => ({
    slug: realization.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  if (!slug) {
    console.log("generateMetadata - slug jest niezdefiniowany.");
    return {
      title: "Nie znaleziono strony",
      description: "Brak identyfikatora realizacji.",
    };
  }

  const realization = realizationsData.find(
    (item) => item && item.id && item.id.toLowerCase() === slug.toLowerCase()
  );

  if (!realization) {
    console.log(
      `generateMetadata - Nie znaleziono realizacji dla sluga: ${slug}`
    );
    return {
      title: "Nie znaleziono strony",
      description: "Strona, której szukasz, nie istnieje.",
    };
  }

  const ogImageSrc =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.src
      : realization.image || "/logo-mkstudio-auto-detailing-opole.jpg";

  const ogImageWidth =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.width || 1200
      : 1200;

  const ogImageHeight =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.height || 630
      : 630;

  const title = `Galeria: ${realization.description} | MK Studio Auto Detailing Opole`;
  const description = `Szczegółowa galeria zdjęć z realizacji usługi: ${realization.description} w MK Studio Detailing w Opolu.`;

  const url = `/galeria/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      images: [
        {
          url: ogImageSrc,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: `Galeria zdjęć z realizacji usługi: ${realization.description}`,
        },
      ],
    },
  };
}

export default function GaleriaStronaPage({ params }) {
  const { slug } = params;

  if (!slug) {
    console.log(
      "GaleriaStronaPage - slug jest niezdefiniowany, wywołuję notFound()."
    );
    notFound();
  }

  const realization = realizationsData.find(
    (item) => item && item.id && item.id.toLowerCase() === slug.toLowerCase()
  );

  if (!realization) {
    console.log(
      `GaleriaStronaPage - Nie znaleziono realizacji dla sluga: ${slug}, wywołuję notFound().`
    );
    notFound();
  }

  return <GaleriaClient realization={realization} />;
}
