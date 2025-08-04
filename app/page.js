import classes from "./page.module.scss";
import Hero from "../components/Main/Hero";
import Services from "../components/Main/Services";
import Pricelist from "../components/Main/Pricelist";
import Contact from "../components/Main/Contact";
import Blog from "../components/Main/Blog";
import ElfsightLazyWrapper from "../components/More/ElfsightLazyWrapper";
import SliderSection from "../components/SliderSection/SliderSection";
import dynamic from "next/dynamic";

export const metadata = {
  title:
    "MK Studio Auto Detailing Opole – korekta lakieru, folia PPF, powłoka ceramiczna",
  description:
    "MK Studio specjalizuje się w kompleksowym autodetailingu: korekta lakieru, folia PPF, powłoki ceramiczne i pranie tapicerki w Opolu.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [
      {
        url: "/og/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "MK Studio Auto Detailing – realizacje i oferta",
      },
    ],
  },
};

const DynamicAboutMe = dynamic(() => import("../components/Main/AboutMe"), {
  ssr: false,
  loading: () => <p>Ładowanie sekcji...</p>,
});

export default function Home() {
  return (
    <>
      <main>
        {" "}
        <Hero />
        <Services />
        <SliderSection />
        <Pricelist />
        <DynamicAboutMe />
        <Blog />
        <ElfsightLazyWrapper />
        <Contact />
      </main>
    </>
  );
}
