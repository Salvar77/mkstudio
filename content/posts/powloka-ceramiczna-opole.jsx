import React from "react";
import Link from "next/link";
import {
  Wrench,
  Droplet,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export const meta = {
  id: 5,
  slug: "powloka-ceramiczna-opole",
  title:
    "Powłoka ceramiczna samochodu w Opolu – trwała ochrona i głęboki połysk",
  subtitle: "CERAMICZNA POWŁOKA OCHRONNA",
  date: "2025-06-15",
  image: "logo2.jpg",
  dynamicImage: "/galeria-powloka-ceramiczna-1.jpg",
  images: [
    "/galeria-powloka-ceramiczna-1.jpg",
    "/galeria-powloka-ceramiczna-2.jpg",
    "/galeria-powloka-ceramiczna-3.jpg",
    "/galeria-powloka-ceramiczna-1.jpg",
  ],
  description:
    "Odkryj zalety powłoki ceramicznej w Opolu: długotrwała ochrona lakieru, odporność na zabrudzenia i promieniowanie UV oraz efekt głębokiego połysku.",
};

export default function CeramicCoatingPost() {
  return (
    <>
      <h2>Co to jest powłoka ceramiczna?</h2>
      <p>
        Powłoka ceramiczna to zaawansowany preparat oparty na nanocząsteczkach,
        który tworzy ultra-trwałą warstwę ochronną na lakierze. W MK Studio Auto
        Detailing aplikuję ją precyzyjnie, aby zabezpieczyć samochód przed
        czynnikami zewnętrznymi.
      </p>

      <h2>Proces aplikacji krok po kroku</h2>
      <ul>
        <li>
          <Wrench className="icon" /> <strong>Przygotowanie powierzchni</strong>{" "}
          – dokładne mycie, odtłuszczanie i korekta lakieru.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Deironizacja</strong> – usuwanie
          cząstek metali i osadów z lakieru.
        </li>
        <li>
          <Wrench className="icon" /> <strong>Aplikacja warstwy bazowej</strong>{" "}
          – nanoszenie pierwszej warstwy ceramicznej.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Wypalanie</strong> – utwardzanie
          powłoki przy optymalnej temperaturze.
        </li>
        <li>
          <Wrench className="icon" /> <strong>Kontrola jakości</strong> – test
          hydrofobowości i ocena połysku.
        </li>
      </ul>

      <h2>Kluczowe korzyści dla Twojego auta</h2>
      <p>
        - Ochrona lakieru przed wodą, brudem i promieniowaniem UV.
        <br />
        - Łatwe mycie i utrzymanie czystości.
        <br />
        - Głęboki, lustrzany połysk.
        <br />- Trwałość nawet do 3 lat.
      </p>

      <h2>Gdzie realizuję usługę?</h2>
      <p>
        Usługa powłoki ceramicznej dostępna jest w moim studiu w Opolu oraz w
        wybranych lokalizacjach mobilnych w Ozimku, Prószkowie, Komprachcicach i
        Lubnianach.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>„Mila profesjonalna obsluga auto Jak z salonu polecam”</p>
        <cite>– Piotr - Pavel Konobrock</cite>
      </blockquote>
      <blockquote>
        <p>
          „Polecam firmę. Jestem zadowolona z wykonanych usług w moim aucie, I
          profesjonalnym podejściu do klienta. Szybki termin , niskie ceny.”
        </p>
        <cite>– Joanna Dec</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contact-info">
        Zapraszam do kontaktu w celu omówienia szczegółów oferty i wyceny:
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
          <span className="cta-button">Przejdź do formularza kontaktowego</span>
        </Link>
      </div>
    </>
  );
}
