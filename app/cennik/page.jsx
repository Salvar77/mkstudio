import Pricelist from "../../components/Main/Pricelist";
import Contact from "../../components/Main/Contact";
import classes from "./Cennik.module.scss";

export const metadata = {
  title: "Cennik usług | MK Studio Auto Detailing  Opole",
  description:
    "Sprawdź aktualne ceny korekty lakieru, folii PPF, powłok ceramicznych, prania tapicerki i pozostałych usług detailingu w MK Studio (Opole).",
  alternates: { canonical: "/cennik" },
  openGraph: {
    url: "/cennik",
    title: "Cennik usług | MK Studio Auto Detailing  Opole",
    description:
      "Poznaj szczegółowy cennik naszych usług: mycie detailingowe, korekta lakieru, ochrona folią PPF, powłoki ceramiczne i więcej.",
    images: [
      {
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik usług MK Studio Auto Detailing",
      },
    ],
  },
};

export default function CennikPage() {
  return (
    <main>
      <h1 className={classes.cennik}>Cennik</h1>
      <Pricelist />
      <Contact />
    </main>
  );
}
