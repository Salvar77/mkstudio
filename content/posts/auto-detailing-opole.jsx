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
      <h2>Co obejmuje kompleksowy auto detailing?</h2>
      <p>
        Kompleksowy auto detailing to pełna pielęgnacja samochodu – zarówno
        wnętrza, jak i zewnętrza. Oferuję usługi: pranie tapicerki, renowację
        skóry, korektę lakieru, aplikację folii PPF oraz powłokę ceramiczną, aby
        Twój pojazd wyglądał jak nowy.
      </p>

      <h2>Zakres usług</h2>
      <ul>
        <li>
          <Droplet className="icon" /> <strong>Pranie tapicerki</strong> –
          głębokie usuwanie zabrudzeń i odświeżanie wnętrza.
        </li>
        <li>
          <Feather className="icon" /> <strong>Renowacja skóry</strong> –
          odżywianie, naprawa i zabezpieczenie powierzchni skórzanych.
        </li>
        <li>
          <Wrench className="icon" /> <strong>Korekta lakieru</strong> –
          usuwanie rys, hologramów i przywracanie połysku.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Folia PPF</strong> – ochrona
          lakieru przed kamieniami i zarysowaniami.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Powłoka ceramiczna</strong> –
          trwała bariera hydrofobowa i UV.
        </li>
      </ul>

      <h2>Korzyści z kompleksowego detailingu</h2>
      <p>
        - Pełna ochrona i łatwiejsze utrzymanie czystości.
        <br />- Przedłużenie żywotności materiałów i lakieru.
        <br />- Odświeżony wygląd i komfort użytkowania.
        <br />- Wzrost wartości rynkowej pojazdu.
      </p>

      <h2>Gdzie wykonuję usługę?</h2>
      <p>
        Działam na terenie Opola oraz okolicznych miejscowości: Ozimek,
        Prószków, Komprachcice i Lubniany. Mobilnie dojeżdżam z pełnym
        wyposażeniem.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>
          „Z całego serca polecam Salon. Samochód zyskał blask, tapicerka jak
          nowa. Fachowość, kompetencja, czas wykonania i życzliwość szczerze
          mnie ujęły. 👍👍”
        </p>
        <cite>– Andreas Krefft</cite>
      </blockquote>
      <blockquote>
        <p>
          „Oddałem do czyszczenia wnętrza drugie auto i tak jak w pierwszym
          przypadku, jestem bardzo zadowolony z jakości wykonanej usługi.
          Szybko, profesjonalnie i w przyzwoitej cenie. Polecam.”
        </p>
        <cite>– Marcin Rozycki</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contact-info">
        Potrzebujesz wyceny lub chcesz omówić szczegóły? Zapraszam do kontaktu:
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <Phone className="icon-down-p" />{" "}
          <a href="tel:+48690570800">690 570 800</a>
        </div>
        <div className="contact-item">
          <Mail className="icon-down-p" />{" "}
          <a href="mailto:mkstudio.opole@gmail.com">mkstudio.opole@gmail.com</a>
        </div>
        <div className="contact-item">
          <MapPin className="icon-down-p" /> ul. Częstochowska 44, 45‑020 Opole
        </div>
        <div className="contact-item">
          <Clock className="icon-down-p" /> Pon–Pt: 07:00–20:00,
          Sob: 08:00–18:00
        </div>
      </div>
      <div className="ctaWrapper">
        <Link href="/kontakt">
          <span className="cta-button">Zarezerwuj Auto Detailing</span>
        </Link>
      </div>
    </>
  );
}
