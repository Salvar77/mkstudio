"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.scss";

const GaleriaClient = ({ realization }) => {
  if (!realization) {
    return (
      <div className={classes.realizationDetail}>
        <h1 className={classes.realizationDetail__header}>
          Nie znaleziono realizacji
        </h1>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Wybrana realizacja nie istnieje lub została usunięta.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/galeria">
            <button className={classes.resetButton}>
              Powrót do wyboru kategorii
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section id="oferta" className={classes.realizationDetail}>
        <h1 className={classes.realizationDetail__header}>
          {realization.description}
        </h1>
        <div className={classes.realizationDetail__box}>
          <div className={classes.realizationDetail__images}>
            {realization.images.map((image, index) => (
              <div
                key={index}
                className={classes.realizationDetail__imageWrapper}
              >
                <Image
                  src={image.src}
                  alt={`${realization.description} - ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/galeria">
            <button className={classes.resetButton}>
              Powrót do wyboru kategorii
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GaleriaClient;
