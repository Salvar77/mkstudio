import { notFound } from "next/navigation";
import { servicesData } from "../../../constants";
import OfertaClient from "./OfertaClient";

export async function generateStaticParams() {
  return servicesData.map(({ id }) => ({
    slug: id.replace("oferta/", ""),
  }));
}

export async function generateMetadata({ params }) {
  const svc = servicesData.find((s) => s.id === `oferta/${params.slug}`);
  if (!svc) return notFound();

  let mod = null;
  try {
    mod = await import(`../../../content/services/${params.slug}.jsx`);
  } catch {}

  const title = mod?.meta?.title ?? svc.title;
  const description =
    mod?.meta?.lead ?? svc.additionalInfo.replace(/<[^>]+>/g, "");

  const heroMeta =
    typeof mod?.meta?.hero === "string" ? mod.meta.hero : mod?.meta?.hero?.src;
  const heroSvc =
    typeof svc.largeImage === "string" ? svc.largeImage : svc.largeImage?.src;
  const ogImage =
    heroMeta ?? heroSvc ?? "/logo-mkstudio-auto-detailing-opole.jpg";

  const url = `/oferta/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export default function OfertaStrona({ params }) {
  return <OfertaClient slugFromParent={params.slug} />;
}
