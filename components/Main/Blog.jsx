"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Blog.module.scss";
import { blogPosts } from "../../constants/index";

const Blog = ({ showReadMoreLink = false }) => {
  return (
    <section id="blog-główna" className={classes.blog}>
      <h2 className={classes.blog__header}>Dowiedz się więcej</h2>
      <div className={classes.blog__box}>
        {blogPosts.map((post) => (
          <div key={post.id} className={classes.blog__boxItem}>
            <div className={classes.blog__image}>
              <Image
                src={post.image}
                alt={`${post.title} - auto detailing, pranie tapicerki, korekta lakieru`}
                width={300}
                height={300}
              />
            </div>

            <Link
              href={`/blog/${post.link.split("/").pop()}`}
              aria-label={`Przeczytaj więcej o ${post.title}`}
            >
              <p className={classes.blog__subtitle}>{post.subtitle}</p>
            </Link>

            <Link
              href={`/blog/${post.link.split("/").pop()}`}
              aria-label={`Przeczytaj artykuł: ${post.title}`}
            >
              <h3>{post.title}</h3>
            </Link>

            <span className={classes.blog__date}>
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <p>{post.description}</p>
            <Link
              href={`/blog/${post.link.split("/").pop()}`}
              className={classes.blog__readMore}
              aria-label={`Przeczytaj więcej o: ${post.title}`}
            >
              Czytaj dalej
            </Link>
          </div>
        ))}
      </div>
      {showReadMoreLink && (
        <Link href="/blog" className={classes.readMoreLink}>
          Przeczytaj więcej na blogu
        </Link>
      )}
    </section>
  );
};

export default Blog;
