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
  id: 3,
  slug: "renowacja-i-czyszczenie-skorzanej-tapicerki-opole",
  title:
    "Renowacja i czyszczenie skórzanej tapicerki w Opolu – przywróć jej blask",
  subtitle: "RENOWACJA I CZYSZCZENIE SKÓRZANEJ TAPICERKI",
  date: "2025-07-14",
  image: "logo2.jpg",
  dynamicImage: "/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg",
  images: [
    "/wlasciciel-mk-studio-kamil-auto-detailing-32.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-5.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-19.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-23.jpg",
  ],
  description:
    "Dowiedz się, jak profesjonalnie odnawiamy i czyścimy skórzaną tapicerkę samochodową w Opolu – usuwamy zarysowania, odżywiamy skórę i zabezpieczamy ją na kolejne lata.",
};

export default function LeatherRenewalPost() {
  return (
    <>
      <h2>Kim jestem i dlaczego warto mi zaufać?</h2>
      <p>
        Nazywam się Kamil z <strong>MK Studio Auto Detailing</strong> i od ponad
        10 lat specjalizuję się w renowacji i czyszczeniu skóry samochodowej.
        Dzięki precyzyjnym technikom usuwam zarysowania, przywracam naturalny
        kolor i elastyczność skóry, korzystając z profesjonalnych preparatów
        renomowanych marek.
      </p>

      <h2>Dlaczego skóra wymaga renowacji?</h2>
      <p>
        Skórzana tapicerka pod wpływem promieni UV, ciepła i zabrudzeń traci
        oleje naturalne, blaknie i pęka. Regularna renowacja przywraca jej
        miękkość, chroni przed dalszym uszkodzeniem i utrzymuje elegancki wygląd
        wnętrza na lata.
      </p>

      <h2>Proces profesjonalnej renowacji i czyszczenia</h2>
      <ul>
        <li>
          <strong>Odkurzanie i czyszczenie wstępne</strong> – usuwam kurz i
          zanieczyszczenia, przygotowując powierzchnię do dalszych etapów.
        </li>
        <li>
          <strong>Delikatne mycie skóry</strong> – stosuję pH-neutralne środki,
          które nie niszczą struktury materiału.
        </li>
        <li>
          <strong>Odżywianie i regeneracja</strong> – aplikuję specjalistyczne
          kremy i balsamy, które przywracają skórze naturalną elastyczność.
        </li>
        <li>
          <strong>Naprawa uszkodzeń</strong> – wypełniam rysy i pęknięcia,
          wyrównując powierzchnię tapicerki.
        </li>
        <li>
          <strong>Impregnacja ochronna</strong> – zabezpieczam skórę przed
          wilgocią, zabrudzeniami i promieniowaniem UV.
        </li>
      </ul>

      <h2>Korzyści dla Twojego auta</h2>
      <p>
        - Odzyskanie głębi koloru i miękkości skóry.
        <br />
        - Wyrównanie i ukrycie drobnych uszkodzeń.
        <br />
        - Zwiększenie trwałości i odporności na codzienne zużycie.
        <br />- Zachowanie wartości pojazdu dzięki profesjonalnej pielęgnacji.
      </p>

      <h2>Gdzie działam?</h2>
      <p>
        Usługi renowacji skóry wykonuję w Opolu i okolicach: Ozimek, Prószków,
        Komprachcice, Lubniany oraz w dzielnicach Zaodrze, Wrzoski, Malina i
        Półwieś.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>
          Gorąco polecam usługi czyszczenia tapicerki w samochodzie. Mój
          samochód po czyszczeniu wygląda jak nowy, materiały czyste , plastiki
          czarne, wszystkie szczelinki wyczyszczone naprawdę jestem pod
          wrażeniem usługi. Bardzo miło, profesjonalnie, nie drogo i terminowo.”
        </p>
        <cite>– Katarzyna Nowak</cite>
      </blockquote>
      <blockquote>
        <p>
          „Korzystałem z usług firmy MK Studio, która zadbała o kompleksowe
          czyszczenie wnętrza oraz polerkę mojego auta, i jestem naprawdę pod
          wrażeniem! Tapicerka po praniu wygląda jak nowa – wszystkie plamy,
          których nie mogłem usunąć, zniknęły, a materiał odzyskał świeżość i
          miękkość. Wnętrze auta zostało dokładnie wyczyszczone, łącznie z
          trudno dostępnymi miejscami, co sprawiło, że samochód pachniał i
          prezentował się świetnie. Dodatkowo, polerka auta nadała karoserii
          piękny połysk, jakby samochód dopiero co wyjechał z salonu.
          Profesjonalne podejście, terminowość i dbałość o szczegóły to
          zdecydowane atuty tej firmy. MK Studio to specjaliści w swojej
          dziedzinie, którzy potrafią przywrócić blask każdemu pojazdowi.
          Zdecydowanie polecam ich usługi!”
        </p>
        <cite>– Szymon</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contact-info">
        Jeśli chcesz dowiedzieć się więcej lub umówić usługę renowacji skóry,
        skontaktuj się ze mną:
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
          <MapPin className="icon-down" /> ul. Częstochowskiej 44, 45-020 Opole
        </div>
        <div className="contact-item">
          <Clock className="icon-down" /> Pon–Pt: 07:00–20:00, Sob: 08:00–18:00
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
