import classes from "./page.module.scss";
import Hero from "../components/Main/Hero";
import Services from "../components/Main/Services";
import Pricelist from "../components/Main/Pricelist";
import Contact from "../components/Main/Contact";
import AboutMe from "../components/Main/AboutMe";
import Blog from "../components/Main/Blog";
import ElfsightLazyWrapper from "../components/More/ElfsightLazyWrapper";
import SliderSection from "../components/SliderSection/SliderSection";
import SEO from "../components/Main/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="MK Studio Auto Detailing Opole – korekta lakieru, folia PPF, powłoka ceramiczna"
        description="MK Studio specjalizuje się w auto detailingu: kompleksowa korekta lakieru, aplikacja folii PPF i powłok ceramicznych, a także profesjonalne pranie tapicerki w Opolu."
        url="https://www.mkstudio.opole.pl/"
        image="https://www.mkstudio.opole.pl/logo-mkstudio-auto-detailing-opole.jpg"
      />

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
    </>
  );
}
