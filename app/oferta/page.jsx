import React from "react";
import Services from "../../components/Main/Services";
import classes from "./Oferta.module.scss";

export const metadata = {
  title: "Oferta usług | MK Studio Auto Detailing Opole",
  description:
    "Pełen zakres auto detailingu w Opolu: korekta lakieru, folia PPF, powłoka ceramiczna, pranie tapicerki i więcej.",
  alternates: { canonical: "/oferta" },
  openGraph: {
    url: "/oferta",
    title: "Oferta usług | MK Studio Auto Detailing Opole",
    description:
      "Pełen zakres auto detailingu w Opolu: korekta lakieru, folia PPF, powłoka ceramiczna, pranie tapicerki i więcej.",
    images: [
      {
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "Oferta usług MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru Opole",
      },
    ],
  },
};

const Oferta = () => {
  return (
    <div className={classes.oferta}>
      <h1 className={classes.oferta__title}>Usługi</h1>
      <Services />
    </div>
  );
};

export default Oferta;
