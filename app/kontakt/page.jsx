import React from "react";
import classes from "./page.module.scss";
import dynamic from "next/dynamic";

const ContactWithAnimation = dynamic(
  () => import("../../components/More/ContactWithAnimation"),
  { ssr: false }
);

const ContactContent = dynamic(() => import("./ContactContent"), {
  ssr: false,
});

export const metadata = {
  title: "Kontakt | MK Studio Auto Detailing Opole",
  description:
    "Umów wizytę lub zadaj pytanie – sprawdź dane kontaktowe do MK Studio Auto Detailing w Opolu: telefon, e‑mail i adres warsztatu.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt | MK Studio Auto Detailing  Opole",
    description:
      "Skontaktuj się z nami, aby zarezerwować termin korekty lakieru, folii PPF, powłoki ceramicznej lub prania tapicerki.",
    images: [
      {
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "Dane kontaktowe MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <main className={classes.contact}>
      <h1 className={classes.contact__title}>Skontaktuj się !</h1>
      <ContactWithAnimation />
      <ContactContent />
    </main>
  );
}
