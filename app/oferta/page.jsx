import React from "react";
import Services from "../../components/Main/Services";
import classes from "./Oferta.module.scss";

export const metadata = {
  title: "Oferta usług | MK Studio Auto Detailing Opole",
  description:
    "Pełen zakres auto detailingu w Opolu: korekta lakieru, folia PPF, powłoka ceramiczna, pranie tapicerki i więcej.",
  alternates: { canonical: "/oferta" },
  openGraph: {
    url: "/oferta",
    images: [
      {
        url: "/og/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "Oferta usług MK Studio Auto Detailing",
      },
    ],
  },
};

const Oferta = () => {
  return (
    <div>
      <h1 className={classes.oferta}>Usługi</h1>
      <Services />
    </div>
  );
};

export default Oferta;
