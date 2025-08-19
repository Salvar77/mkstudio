import Link from "next/link";
import { useEffect } from "react";
import classes from "./Cta.module.scss";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function CtaSection() {
  useEffect(() => {
    const generateStars = () => {
      const starsContainer = document.querySelector(`.${classes.stars}`);
      if (!starsContainer) return;

      const totalStars = 50;
      starsContainer.innerHTML = "";
      for (let i = 0; i < totalStars; i++) {
        let star = document.createElement("div");
        star.className = classes.star;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    };
    generateStars();
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.stars}></div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h2 className={classes.title}>
              <IoMdHelpCircleOutline className={classes.iconQuestion} />
              Umów się na Profesjonalny Auto Detailing w Opolu!
            </h2>

            <p className={classes.text}>
              Wypełnij formularz kontaktowy, a ja,{" "}
              <span className={classes.name}>Kamil</span>, skontaktuję się z
              Tobą w ciągu godziny, aby ustalić szczegóły. Nie czekaj z
              rezerwacją!
            </p>
          </div>
          <Link href="/kontakt" passHref>
            <div className={classes.button}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#171a21"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                />
              </svg>
              <Link href="/kontakt">
                <span className={classes.buttonText}>Skontaktuj się</span>
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
