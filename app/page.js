import classes from "./page.module.scss";
import Hero from "../components/Main/Hero";
import Services from "../components/Main/Services";
import Pricelist from "../components/Main/Pricelist";
import Contact from "../components/Main/Contact";
import AboutMe from "../components/Main/AboutMe";
import Blog from "../components/Main/Blog";
import ElfsightLazyWrapper from "../components/More/ElfsightLazyWrapper";
// import ElfsightWidget from "@/components/More/ElfsightWidget";

export default function Home() {
  return (
    <main>
      {" "}
      <Hero />
      <Services />
      <Pricelist />
      <AboutMe />
      <Blog />
      <ElfsightLazyWrapper />
      <Contact />
    </main>
  );
}
