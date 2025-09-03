import React from "react";
import classes from "./Footer.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("../More/GoogleMap"), { ssr: false });
const ContactMain = dynamic(() => import("../Main/ContactMain"), {
  ssr: false,
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <GoogleMap />
      <ContactMain />
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;{currentYear} <strong>MK Studio Auto detailing</strong> -
            Pranie tapicerki - Korekta lakieru
          </p>
        </div>
        <div className={classes.footer__poweredBy}>
          <p className={classes.footer__poweredByInfo}>
            Powered by{" "}
            <a
              href="https://www.searchit.pl/"
              className={classes.poweredByLink}
            >
              Search IT
            </a>{" "}
            - Strony i Sklepy WWW
          </p>
        </div>
      </div>
      <div className={classes.policy}>
        <Link
          href="/obszary-mojej-dzialalnosci"
          className={classes.policy__link}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Obszary Mojej Działalności</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
