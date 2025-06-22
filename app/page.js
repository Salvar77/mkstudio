import classes from "./page.module.scss";
import Image from "next/image";
import logo from "../assets/image/logo2.jpg";

export default function Home() {
  return (
    <main>
      <section id="hero" className={classes.hero}>
        <div className={classes.hero__box}>
          <Image
            src={logo}
            className={classes.hero__boxImg}
            alt="MKStudio logo"
          />
        </div>
      </section>
    </main>
  );
}
