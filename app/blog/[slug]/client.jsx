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

    return () => (mounted = false);
  }, [slug]);

  if (meta === null) return <p>Wpis nie znaleziony.</p>;
  if (meta === undefined || !Content) return <p>Ładowanie wpisu...</p>;

  const { title, date, dynamicImage, image, images } = meta;
  const imageSrc = dynamicImage || `/images/${image}`;

  return (
    <main className={classes.blogPost__container}>
      <article className={classes.blogPost}>
        <div className={classes.blogPost__imageWrapper}>
          <Image src={imageSrc} alt={title} width={1200} height={600} />
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
                  alt={`${title} ${i + 1}`}
                  width={800}
                  height={450}
                  objectFit="cover"
                />
              ))}
            </div>
          )}

          <Link href="/blog" className={classes.backButton}>
            ← Powrót do bloga
          </Link>
        </div>

        <CtaSection />
      </article>
    </main>
  );
}
