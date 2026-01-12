import dynamic from "next/dynamic";
import Hero from "../components/Main/Hero";

const Services = dynamic(() => import("../components/Main/Services"), {
  ssr: false,
});

const SliderSection = dynamic(
  () => import("../components/SliderSection/SliderSection"),
  { ssr: false }
);

const Pricelist = dynamic(() => import("../components/Main/Pricelist"), {
  ssr: false,
});
const AboutMe = dynamic(() => import("../components/Main/AboutMe"), {
  ssr: false,
});
const Blog = dynamic(() => import("../components/Main/Blog"), { ssr: false });
const ElfsightLazyWrapper = dynamic(
  () => import("../components/More/ElfsightLazyWrapper"),
  { ssr: false }
);
const Contact = dynamic(() => import("../components/Main/Contact"), {
  ssr: false,
});

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
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "MK Studio Auto Detailing – realizacje i oferta",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        {" "}
        <Hero />
        <Services />
        <SliderSection />
        <Pricelist />
        <AboutMe />
        <Blog showReadMoreLink={true} />
        <ElfsightLazyWrapper />
        <Contact />
      </main>
    </>
  );
}
