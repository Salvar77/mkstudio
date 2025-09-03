"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./galeria.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { staggerContainer, slideRotateY } from "../../utils/motion";
import { realizationsData } from "./realizationsData";

const Galeria = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.background}>
      <section id="galeria" className={classes.realizations}>
        <h1>Galeria</h1>
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={classes.realizations__wrapper}
        >
          {realizationsData.map((realization, index) => (
            <TiltedCard
              key={realization.id}
              realization={realization}
              index={index}
              isDesktop={isDesktop}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

const TiltedCard = ({ realization, index, isDesktop }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isDesktop) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / rect.height) * -30;
    const rotationY = (offsetX / rect.width) * 30;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    if (!isDesktop) return;
    scale.set(1.1);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={slideRotateY(index * 0.1, 0.5, index, 100, 30, isDesktop)}
      className={classes.realizations__item}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
    >
      <div
        className={`${classes.realizations__imageWrapper} ${
          isDesktop && realization.customClass
            ? classes[realization.customClass]
            : realization.mobileClass
            ? classes[realization.mobileClass]
            : ""
        }`}
        style={{ backgroundImage: realization.gradient }}
      >
        <Image
          src={realization.image}
          alt={`Realizacja w Opolu- ${realization.description} - profesjonalny auto detailing, czyszczenie samochodu`}
          width={400}
          height={300}
        />
        <motion.div
          className={classes.realizations__content}
          style={{ transform: "translateZ(20px)" }}
        >
          <p>{realization.description}</p>
          <Link
            href={`/galeria/${realization.id}`}
            className={classes.realizations__button}
            aria-label={`Zobacz więcej o realizacji: ${realization.description}`}
          >
            &#10132;
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Galeria;
