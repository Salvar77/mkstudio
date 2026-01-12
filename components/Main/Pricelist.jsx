"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { exteriorServices, interiorServices } from "../../constants";
import { FaMagic } from "react-icons/fa";
import classes from "./Pricelist.module.scss";

const PriceSection = ({ title, services }) => (
  <section className={classes.pricingSection}>
    <h2 className={classes.pricingSection__title}>{title}</h2>

    <div className={classes.pricingGrid}>
      {services.map((svc) => (
        <div key={svc.id} className={classes.priceCard}>
          <div className={classes.priceCard__header}>
            <FaMagic className={classes.priceCard__icon} />
            <span className={classes.priceCard__range}>{svc.priceRange}</span>
            <span className={classes.priceCard__line} />
          </div>

          <h3 className={classes.priceCard__title}>{svc.title}</h3>

          <ul className={classes.priceCard__list}>
            {svc.items.map((it, i) => (
              <li key={i} className={classes.priceCard__item}>
                → {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Pricelist = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const wrapperClass = `${classes.pricing} ${
    isHome ? "" : classes.noTopPadding
  }`;

  return (
    <div className={wrapperClass}>
      <PriceSection title="Usługi zewnętrzne" services={exteriorServices} />
      <PriceSection title="Usługi wnętrza" services={interiorServices} />
    </div>
  );
};

export default Pricelist;
