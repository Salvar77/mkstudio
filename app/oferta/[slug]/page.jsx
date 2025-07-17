import { notFound } from "next/navigation";
import { servicesData } from "../../../constants/index";
import classes from "./page.module.scss";

export async function generateStaticParams() {
  return servicesData.map(({ id }) => ({
    slug: id.replace("oferta/", ""),
  }));
}

export function generateMetadata({ params }) {
  const svc = servicesData.find((s) => s.id === `oferta/${params.slug}`);
  if (!svc) return notFound();

  const url = `/oferta/${params.slug}`;
  const description = svc.additionalInfo.replace(/<[^>]+>/g, ""); // tekst bez HTML

  return {
    title: svc.title, // → „Korekta lakieru | MK Studio…”
    description,
    alternates: { canonical: url },
    openGraph: { url },
  };
}

export default function OfertaStrona({ params }) {
  const service = servicesData.find((s) => s.id === `oferta/${params.slug}`);

  if (!service) return notFound();

  return (
    <article className={classes.offer}>
      <h1>{service.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.additionalInfo }} />
    </article>
  );
}
