import { notFound } from "next/navigation";
import { realizationsData } from "../realizationsData";
import GaleriaClient from "./GaleriaClient";

export async function generateStaticParams() {
  if (!realizationsData || !Array.isArray(realizationsData)) {
    console.error(
      "realizationsData is not an array or is undefined in generateStaticParams"
    );
    return [];
  }
  console.log(
    "generateStaticParams - realizationsData IDs:",
    realizationsData.map((r) => r.id)
  );

  return realizationsData.map((realization) => ({
    slug: realization.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  if (!slug) {
    console.log("generateMetadata - slug is undefined.");
    return {
      title: "Nie znaleziono strony",
      description: "Brak identyfikatora realizacji.",
    };
  }

  const realization = realizationsData.find(
    (item) => item && item.id && item.id.toLowerCase() === slug.toLowerCase()
  );

  if (!realization) {
    console.log(`generateMetadata - Realization not found for slug: ${slug}`);
    return {
      title: "Nie znaleziono strony",
      description: "Strona, której szukasz, nie istnieje.",
    };
  }

  const ogImageSrc =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.src
      : realization.image || "/logo2.jpg";

  const ogImageWidth =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.width || 1200
      : 1200;

  const ogImageHeight =
    typeof realization.image === "object" && realization.image !== null
      ? realization.image.height || 630
      : 630;

  const title = `Galeria: ${realization.description} | MK Studio Detailing - Pranie tapicerki - Korektka lakieru`;
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
      images: [{ url: ogImageSrc, width: ogImageWidth, height: ogImageHeight }],
    },
  };
}

export default function GaleriaStronaPage({ params }) {
  const { slug } = params;

  if (!slug) {
    console.log("GaleriaStronaPage - slug is undefined, calling notFound().");
    notFound();
  }

  const realization = realizationsData.find(
    (item) => item && item.id && item.id.toLowerCase() === slug.toLowerCase()
  );

  if (!realization) {
    console.log(
      `GaleriaStronaPage - Realization not found for slug: ${slug}, calling notFound().`
    );
    notFound();
  }

  return <GaleriaClient realization={realization} />;
}
