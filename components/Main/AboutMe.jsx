"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { FaCar, FaShieldAlt, FaCouch } from "react-icons/fa";
import { MdBlurOn, MdBathroom } from "react-icons/md";
import { IoMdBrush } from "react-icons/io";
import { RiShining2Fill } from "react-icons/ri";
import { GiVacuumCleaner } from "react-icons/gi";
import AnimatedButton from "../More/AnimatedButton";
import classes from "./AboutMe.module.scss";
import AboutImage from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-2.webp";

const features = [
  { Icon: FaCar, text: "Profesjonalne mycie detailingowe" },
  { Icon: FaShieldAlt, text: "Aplikacja folii PPF" },
  { Icon: MdBlurOn, text: "Powłoka na szyby (niewidzialna wycieraczka)" },
  { Icon: IoMdBrush, text: "Detailing wnętrza" },
  { Icon: FaCouch, text: "Renowacja i impregnacja skór" },
  { Icon: GiVacuumCleaner, text: "Dokładne czyszczenie każdego zakamarka" },
  { Icon: MdBathroom, text: "Pranie tapicerki" },
  { Icon: RiShining2Fill, text: "Polerowanie lakieru" },
];

export default function AboutMe() {
  const router = useRouter();
  const lastFeatureDelay = 0.4 + (features.length - 1) * 0.1;
  const lastFeatureDuration = 0.8;
  const buttonDelay = lastFeatureDelay + lastFeatureDuration + 0.1;

  return (
    <section className={classes.about}>
      <div className={classes.about__content}>
        <motion.h2
          className={classes.about__title}
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          O mnie
        </motion.h2>

        <motion.p
          className={classes.about__subtitle}
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          MK Studio Auto Detailing – pasjonat perfekcji w każdym calu
        </motion.p>

        <ul className={classes.about__list}>
          {features.map(({ Icon, text }, i) => (
            <motion.li
              key={i}
              className={classes.about__item}
              variants={fadeIn("up", "tween", 0.4 + i * 0.1, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Icon className={classes.about__icon} />
              {text}
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={fadeIn("up", "tween", buttonDelay, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedButton
            className={classes.about__button}
            onClick={() => router.push("/galeria")}
          >
            Poznaj realizację →
          </AnimatedButton>
        </motion.div>
      </div>

      <div className={classes.about__image}>
        <Image
          src={AboutImage}
          alt="Właściciel MK Studio, Kamil. Profesjonalny Auto Detailing Opole: pranie tapicerki i korekta lakieru."
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
