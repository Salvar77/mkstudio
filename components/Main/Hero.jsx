"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Hero.module.scss";
import HeroImageMobile from "../../assets/image/logo2.jpg";
import HeroImageDesktop from "../../assets/image/logo2.jpg";

const Hero = ({ mobileWhiteBlockColor = "#1D120C" }) => {
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const description = "Kompleksowy detailing samochodu";

  return (
    <div>
      <div className={classes.heroContainer}>
        <section id="hero" className={classes.hero}>
          <div className={classes.imageWrapper}>
            <Image
              src={isMobile ? HeroImageMobile : HeroImageDesktop}
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              // objectPosition={isMobile ? "center" : "80% 20%"}
              priority
            />
          </div>

          <div className={classes.textOverlay}>
            <h1 className={classes.hero__title}>
              <span className={classes.hero__titleGold}>MK Studio</span>
              <span className={classes.hero__titleWhite}> Auto detailing</span>
            </h1>
            <p className={classes.hero__description}>{description}</p>
            <a href="#galeria" className={classes.button}>
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
