import classes from "./page.module.scss";
import Hero from "@/components/Main/Hero";
import Services from "@/components/Main/Services";
import Pricelist from "@/components/Main/Pricelist";
import Contact from "@/components/Main/Contact";

export default function Home() {
  return (
    <main>
      <section id="hero" className={classes.hero}>
        {" "}
        <Hero />
        <Services />
        <Pricelist />
        <Contact />
      </section>
    </main>
  );
}
