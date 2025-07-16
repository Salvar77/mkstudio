import { notFound } from "next/navigation";
import { servicesData } from "../../../constants/index";
import classes from "./page.module.scss";

export async function generateStaticParams() {
  return servicesData.map(({ id }) => ({
    slug: id.replace("oferta/", ""),
  }));
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
