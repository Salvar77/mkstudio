"use client";
import React from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Hero.module.scss";
import HeroImageMobile from "../../assets/image/logo-mkstudio-auto-detailing-opole.webp";
import HeroImageDesktop from "../../assets/image/logo-mkstudio-auto-detailing-opole.webp";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");

  const description = "Kompleksowy detailing samochodu";

  return (
    <div>
      <div className={classes.heroContainer}>
        <section id="hero" className={classes.hero}>
          <div className={classes.imageWrapper}>
            <Image
              src={isMobile ? HeroImageMobile : HeroImageDesktop}
              alt="Główny baner MK Studio Auto Detailing - profesjonalny auto detailing Opole, pranie tapicerki i korekta lakieru"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className={classes.textOverlay}>
            <h1 className={classes.hero__title}>
              <span className={classes.hero__titleGold}>MK Studio</span>
              <span className={classes.hero__titleWhite}>
                {" "}
                Auto detailing - Pranie tapicerki - Korekta lakieru
              </span>
            </h1>
            <p className={classes.hero__description}>{description}</p>
            <a
              href="tel:+48690570800"
              className={classes.button}
              aria-label="Zadzwoń do MK Studio"
            >
              Zadzwoń →
            </a>
          </div>
        </section>
        <div className={classes.whiteBlockWrapper}></div>
      </div>
    </div>
  );
};

export default Hero;
