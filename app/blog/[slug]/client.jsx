"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "../../../components/More/Cta";
import classes from "./page.module.scss";

export default function BlogPostClient({ slugFromParent }) {
  const slug = slugFromParent ?? useParams().slug;

  const [meta, setMeta] = useState(undefined);
  const [Content, setContent] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    let mounted = true;
    import(`../../../content/posts/${slug}.jsx`)
      .then((mod) => {
        if (mounted) {
          setMeta(mod.meta);
          setContent(() => mod.default);
        }
      })
      .catch(() => mounted && setMeta(null));

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      mounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, [slug]);

  if (meta === null) return <p>Wpis nie znaleziony.</p>;
  if (meta === undefined || !Content) return <p>Ładowanie wpisu...</p>;

  const { title, date, images } = meta;
  const defaultImage = meta.dynamicImage || `/images/${meta.image}`;

  let imageSrc;
  if (slug === "powloka-ceramiczna-opole") {
    imageSrc = isDesktop
      ? "/galeria-powloka-ceramiczna-3.jpg"
      : "/galeria-powloka-ceramiczna-1.jpg";
  } else {
    imageSrc = defaultImage;
  }

  const imageStyles = {
    "jak-zabezpieczyc-tapicerke-przed-plamami": "specialImage2",
    "glebokie-pranie-tapicerki-opole": "specialImage",
    "renowacja-i-czyszczenie-skorzanej-tapicerki-opole": "specialImage",
    "folia-ppf-opole": "styleThree",
    "korekta-lakieru-opole": "anotherSpecialImage",
    "powloka-ceramiczna-opole": "styleFour",
    "auto-detailing-opole": "anotherSpecialImage",
  };
  const customImageClass = imageStyles[slug] || "";

  return (
    <main className={classes.blogPost__container}>
      <article className={classes.blogPost}>
        <div className={classes.heroWrapper}>
          {isDesktop ? (
            <div
              className={`${classes.blogPost__imageWrapper} ${
                customImageClass ? classes[customImageClass] : ""
              }`}
              style={{ backgroundImage: `url(${imageSrc})` }}
            >
              <div className={classes.imageOverlay}></div>
            </div>
          ) : (
            <div className={classes.blogPost__imageWrapper}>
              <Image
                src={imageSrc}
                alt={meta.mainImageAltText || title}
                width={1200}
                height={600}
                style={{ objectFit: "cover" }}
              />
              <div className={classes.imageOverlay}></div>
            </div>
          )}
          <div
            className={`${classes.blogPost__whiteBlock} ${classes.blogPost__whiteBlockLeft}`}
          ></div>
        </div>

        <div className={classes.blogPost__box}>
          <h1>{title}</h1>
          <time>{date}</time>

          <Content />

          {images && (
            <div className={classes.blogPost__imageGrid}>
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={meta.imagesAltText?.[i] || `${title} ${i + 1}`}
                  width={800}
                  height={450}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          )}

          <Link href="/blog" className={classes.backButton}>
            ← Powrót do bloga
          </Link>
        </div>
      </article>
      <CtaSection />
    </main>
  );
}
