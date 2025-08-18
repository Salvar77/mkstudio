"use client";
import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeScale } from "../../utils/motion";
import { servicesData } from "../../constants/index";

const Services = () => {
  return (
    <div className={classes.servicesBackground}>
      <div className={classes.servicesBackground__fade}></div>
      <section id="usługi" className={classes.services}>
        <h2>Co oferuję?</h2>
        <div className={classes.services__wrapper}>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={classes.services__item}
              variants={fadeScale(index * 0.15, 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <div className={classes.card}>
                <div className={classes.card__image}>
                  <Image
                    src={service.image}
                    alt={service.altText}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={classes.card__body}>
                  <h3 className={classes.card__title}>{service.title}</h3>
                  <div className={classes.card__rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <hr className={classes.card__divider} />
                  {service.additionalInfo && (
                    <div
                      className={classes.card__text}
                      dangerouslySetInnerHTML={{
                        __html: service.additionalInfo,
                      }}
                    />
                  )}
                  <Link
                    href={`/${service.id}`}
                    className={classes.card__button}
                    aria-label={`Sprawdź usługę: ${service.title}`}
                  >
                    Sprawdź
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
