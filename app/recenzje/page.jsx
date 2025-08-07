import ElfsightLazyWrapper from "../../components/More/ElfsightLazyWrapper";
import classes from "./page.module.scss";

export const metadata = {
  title: "Opinie klientów | MK Studio Detailing Opole",
  description:
    "Sprawdź recenzje i oceny klientów MK Studio Auto Detailing w Opolu. Zobacz, dlaczego warto nam zaufać.",
  alternates: { canonical: "/recenzje" },
  openGraph: {
    url: "/recenzje",
    title: "title: Opinie klientów | MK Studio Auto Detailing Opole",
    description:
      "Autentyczne opinie kierowców korzystających z korekty lakieru, folii PPF, powłok ceramicznych i prania tapicerki w MK Studio.",
    images: [
      {
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "Opinie klientów MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru",
      },
    ],
  },
};

export default function RecenzjePage() {
  return (
    <main className={classes.recenzje}>
      <h1>Recenzje</h1>
      <ElfsightLazyWrapper />
    </main>
  );
}
