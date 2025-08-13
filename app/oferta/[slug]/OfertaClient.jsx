"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import CTA from "../../../components/More/Cta";
import classes from "./page.module.scss";

export default function OfertaClient({ slugFromParent }) {
  const slug = slugFromParent ?? useParams().slug;

  const [meta, setMeta] = useState(undefined);
  const [Content, setContent] = useState(null);
  const [svcData, setSvcData] = useState(undefined);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      const { servicesData: globalServicesData } = await import(
        "../../../constants"
      );
      const currentSvc = globalServicesData.find(
        (s) => s.id === `oferta/${slug}`
      );
      setSvcData(currentSvc);
      try {
        const mod = await import(`../../../content/services/${slug}.jsx`);
        if (mounted) {
          setMeta(mod.meta);
          setContent(() => mod.default);
        }
      } catch (error) {
        console.error("Failed to load dynamic service content:", error);
        if (mounted) {
          setMeta(null);
          setContent(null);
        }
      }
    };

    fetchContent();

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (meta === null && svcData === undefined) {
    return <p>Ładowanie...</p>;
  }
  if (meta === null && svcData) {
    return (
      <article className={classes.offer}>
        <h1>{svcData.title}</h1>
        <div className={classes.offer__text}>{svcData.additionalInfo}</div>
      </article>
    );
  }
  if (meta === undefined || !Content || svcData === undefined) {
    return <p>Ładowanie usługi...</p>;
  }

  const { title, hero, lead, heroAltText } = meta;
  const heroSrc = typeof hero === "string" ? hero : hero?.src ?? "/logo2.jpg";

  return (
    <div className={classes.pageWrapper}>
      <div className={`${classes.whiteBlock} ${classes.whiteBlockLeft}`}></div>
      <div className={`${classes.whiteBlock} ${classes.whiteBlockRight}`}></div>
      <div className={`${classes.whiteBlock} ${classes.whiteBlockTop}`}></div>
      <div
        className={`${classes.whiteBlock} ${classes.whiteBlockBottom}`}
      ></div>

      <header className={classes.hero}>
        <Image
          src={heroSrc}
          alt={heroAltText || title || "Hero zdjęcie"}
          className={classes.hero__bg}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={classes.hero__inner}>
          <h1>{title}</h1>
          {lead && <p className={classes.lead}>{lead}</p>}
        </div>
      </header>
      <main className={classes.serviceBody}>
        <Content />
      </main>
      <CTA />
    </div>
  );
}
