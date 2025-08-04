"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./galeria.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, slideRotateY } from "../../utils/motion";
import { realizationsData } from "./realizationsData";

const Galeria = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
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
            <motion.div
              key={realization.id}
              variants={slideRotateY(
                index * 0.1,
                0.5,
                index,
                100,
                30,
                isDesktop
              )}
              className={classes.realizations__item}
            >
              <div
                className={classes.realizations__imageWrapper}
                style={{ backgroundImage: realization.gradient }}
              >
                <Image
                  src={realization.image}
                  alt={`Realizacja - ${realization.description} - profesjonalny auto detailing, czyszczenie samochodu`}
                  width={400}
                  height={300}
                />
                <div className={classes.realizations__content}>
                  <p>{realization.description}</p>
                  <Link
                    href={`/galeria/${realization.id}`}
                    className={classes.realizations__button}
                    aria-label={`Zobacz więcej o realizacji: ${realization.description}`}
                  >
                    &#10132;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Galeria;
