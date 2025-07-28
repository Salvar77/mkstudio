import Link from "next/link";
import classes from "./Cta.module.scss";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function CtaSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h2 className={classes.title}>
              <IoMdHelpCircleOutline className={classes.iconQuestion} />
              Umów się na Profesjonalny Auto Detailing w Opolu!
            </h2>
            <p className={classes.text}>
              Wypełnij formularz kontaktowy, a ja, Kamil, skontaktuję się z Tobą
              najszybciej, jak to możliwe!
            </p>
          </div>
          <Link href="/kontakt" passHref>
            <div className={classes.button}>
              <svg
                className={classes.icon}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 44h48v4H8z" fill="#171a21" />
                <path d="M12 44l4-12h32l4 12" fill="#d4af37" />
                <path
                  d="M16 32v-8h32v8"
                  stroke="#171a21"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 24l12 8 12-8"
                  stroke="#171a21"
                  strokeWidth="2"
                  fill="none"
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
