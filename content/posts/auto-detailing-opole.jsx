import React from "react";
import Link from "next/link";
import {
  Droplet,
  Wrench,
  Feather,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import classes from "../../app/blog/[slug]/page.module.scss";

export const meta = {
  id: 7,
  slug: "auto-detailing-opole",
  title:
    "Kompleksowe usługi auto detailingu w Opolu – od prania po korektę lakieru",
  subtitle: "AUTO DETAILING",
  date: "2025-06-01",
  image: "/auto-detailing-mk-studio-opole-produkty.jpg",
  dynamicImage: "/auto-detailing-mk-studio-opole-produkty.jpg",
  mainImageAltText:
    "Wnętrze samochodu po profesjonalnym auto detailingu. Produkty do czyszczenia wnętrza i prania tapicerki w MK Studio Auto Detailing Opole.",
  images: [
    "/wlasciciel-mk-studio-kamil-auto-detailing-16.jpg",
    "/auto-detailing-mk-studio-opole-produkty.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-23.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-5.jpg",
  ],
  imagesAltText: [
    "Właściciel MK Studio, Kamil, podczas pracy nad autem w warsztacie auto detailingu w Opolu.",
    "Profesjonalne produkty do auto detailingu i prania tapicerki w MK Studio Opole.",
    "Ekspert od auto detailingu w Opolu. Przygotowanie do końcowego etapu prania tapicerki.",
    "Auto Detailing Opole - profesjonalna pielęgnacja samochodu, odświeżanie wnętrza i renowacja lakieru.",
  ],
  description:
    "Zapewnij swojemu samochodowi kompleksową pielęgnację: pranie tapicerki, renowację skóry, korektę lakieru, aplikację folii PPF i powłoki ceramicznej. Dowiedz się, na czym polega pełny detailing.",
};

export default function AutoDetailingPost() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Kompleksowy Auto Detailing w Opolu: Co Obejmuje Moja Oferta?
      </h2>
      <p className={classes.textShadow}>
        Nazywam się Kamil i w <strong>MK Studio Auto Detailing</strong> w Opolu
        doskonale rozumiem, że kompleksowy{" "}
        <strong>
          <Link href="/oferta/auto-detailing">auto detailing</Link>
        </strong>{" "}
        to coś więcej niż tylko mycie samochodu. To pełna, dogłębna pielęgnacja,
        która przywraca samochodowi jego pierwotny blask, chroni go przed
        szkodliwymi czynnikami zewnętrznymi i znacząco podnosi jego wartość.
        Moje usługi są skrojone na miarę, obejmując zarówno wnętrze, jak i
        zewnętrze Twojego pojazdu, aby każdy element był perfekcyjnie zadbany.
      </p>

      <h2 className={classes.blogTitle}>
        Specjalistyczne Usługi Auto Detailingu – Jakość Gwarantowana Przeze Mnie
      </h2>
      <ul>
        <li>
          <Droplet className="icon" />
          <strong>
            <Link href="/oferta/pranie-tapicerki">Pranie tapicerki</Link>
          </strong>{" "}
          – używam profesjonalnych ekstraktorów i bezpiecznych detergentów, aby
          głęboko wyczyścić i odświeżyć tapicerkę materiałową, eliminując plamy,
          nieprzyjemne zapachy czy też roztocza.
        </li>
        <li>
          <Feather className="icon" />
          <strong>
            <Link href="/oferta/renowacja-i-czyszczenie-skor">
              Renowacja skóry
            </Link>
          </strong>{" "}
          – to proces odżywiania, naprawy drobnych uszkodzeń oraz zabezpieczania
          powierzchni skórzanych, przywracający im miękkość, kolor i estetyczny
          wygląd.
        </li>
        <li>
          <Wrench className="icon" />
          <strong>
            <Link href="/oferta/korekta-lakieru">Korekta lakieru</Link>
          </strong>{" "}
          – mój wieloetapowy proces polerowania, znany także jako car detailing,
          skutecznie usuwa zmatowienia, rysy, hologramy czy inne
          niedoskonałości, przywracając lakierowi głęboki, lustrzany połysk.
        </li>
        <li>
          <Droplet className="icon" />
          <strong>
            <Link href="/oferta/folia-ppf-ochrona-lakieru">Folia PPF</Link>
          </strong>{" "}
          – aplikuję zaawansowaną, bezbarwną folię poliuretanową, która stanowi
          niewidzialną barierę ochronną, skutecznie zabezpieczając lakier przed
          odpryskami od kamieni, zarysowaniami i innymi uszkodzeniami
          mechanicznymi.
        </li>
        <li>
          <Droplet className="icon" />
          <strong>
            <Link href="/oferta/powloka-ceramiczna">Powłoka ceramiczna</Link>
          </strong>{" "}
          – aplikuję profesjonalne powłoki, które tworzą na lakierze trwałą
          barierę hydrofobową, ułatwiającą mycie samochodu oraz chroniącą go
          przed promieniowaniem UV, solą drogową i kwaśnymi deszczami.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>
        Dlaczego warto wybrać MK Studio w Opolu? Korzyści z Mojego Detailingu
      </h2>
      <p className={classes.textShadow}>
        Wybór profesjonalnego auto detailingu w MK Studio to inwestycja w wygląd
        i trwałość Twojego pojazdu. Gwarantuję pełną ochronę i znacznie
        łatwiejsze utrzymanie czystości, co przekłada się na oszczędność czasu.
        Moje usługi przedłużają żywotność materiałów we wnętrzu oraz lakieru, a
        odświeżony wygląd samochodu zwiększa komfort jego użytkowania i podnosi
        jego wartość rynkową.
      </p>

      <h2 className={classes.blogTitleC}>
        Lokalizacja i Obszar Mojego Działania
      </h2>
      <p className={classes.textShadowC}>
        Jestem dumny, że mogę służyć mieszkańcom Opola i okolic jako zaufany
        warsztat auto detailingu. Działam na terenie miasta oraz w
        miejscowościach takich jak Ozimek, Prószków, Komprachcice i Lubniany.
        Wiele usług realizuję również mobilnie, dojeżdżając do klienta z pełnym,
        profesjonalnym wyposażeniem.
      </p>

      <h2 className={classes.blogTitleC}>Oceny i Opinie Zaufanych Klientów</h2>
      <p className={classes.textShadowC}>
        Zaufanie moich klientów jest dla mnie najważniejsze. Sprawdź, co mówią
        osoby, które powierzyły mi swoje samochody.
      </p>
      <blockquote>
        <p className={classes.textShadowD}>
          „Z całego serca polecam Salon. Samochód zyskał blask, tapicerka jak
          nowa. Fachowość, kompetencja, czas wykonania i życzliwość szczerze
          mnie ujęły. 👍👍”
        </p>
        <cite>– Andreas Krefft</cite>
      </blockquote>
      <blockquote>
        <p className={classes.textShadowD}>
          „Oddałem do czyszczenia wnętrza drugie auto i tak jak w pierwszym
          przypadku, jestem bardzo zadowolony z jakości wykonanej usługi.
          Szybko, profesjonalnie i w przyzwoitej cenie. Polecam.”
        </p>
        <cite>– Marcin Rozycki</cite>
      </blockquote>

      <h2 className={classes.blogContactTitle}>
        Skontaktuj się ze Mną, Ekspertem od Auto Detailingu w Opolu
      </h2>
      <p className={classes.contactInfo}>
        Gotowy, aby doświadczyć różnicy? Potrzebujesz szczegółowej wyceny lub
        chcesz omówić plan pielęgnacji Twojego samochodu? Zapraszam do kontaktu:
      </p>
      <div className={classes.contactDetails}>
        <div className={classes.contactItem}>
          <Phone className={classes.iconDownP} />{" "}
          <a href="tel:+48690570800">690 570 800</a>
        </div>
        <div className={classes.contactItem}>
          <Mail className={classes.iconDownP} />{" "}
          <a href="mailto:mkstudio.opole@gmail.com">mkstudio.opole@gmail.com</a>
        </div>
        <div className={classes.contactItem}>
          <MapPin className={classes.iconDownP} /> ul. Częstochowska 44, 45-020
          Opole
        </div>
        <div className={classes.contactItem}>
          <Clock className={classes.iconDownP} /> Pon–Pt: 07:00–20:00, Sob:
          08:00–18:00
        </div>
      </div>
      <div className={classes.ctaWrapper}>
        <Link href="/oferta/auto-detailing">
          <span className={classes.ctaButton}>Zarezerwuj Auto Detailing</span>
        </Link>
      </div>
    </>
  );
}
