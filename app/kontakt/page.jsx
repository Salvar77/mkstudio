import Contact from "../../components/Main/Contact";
import classes from "./page.module.scss";

export const metadata = {
  title: "Kontakt | MK Studio Auto Detailing Opole",
  description:
    "Umów wizytę lub zadaj pytanie – sprawdź dane kontaktowe do MK Studio Auto Detailing w Opolu: telefon, e‑mail i adres warsztatu.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt | MK Studio Auto Detailing Opole",
    description:
      "Skontaktuj się z nami, aby zarezerwować termin korekty lakieru, folii PPF, powłoki ceramicznej lub prania tapicerki.",
    images: [
      {
        url: "/og/logo2.jpg", // ⇐ plik w “public/og/”
        width: 1200,
        height: 630,
        alt: "Dane kontaktowe MK Studio Auto Detailing",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <main className={classes.contact}>
      <h1>Kontakt</h1>
      <Contact />
    </main>
  );
}
