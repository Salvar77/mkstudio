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
  id: 2,
  slug: "glebokie-pranie-tapicerki-opole",
  title:
    "Głębokie pranie tapicerki w Opolu – usuń uporczywe plamy i nieprzyjemne zapachy",
  subtitle: "PROFESJONALNE PRANIE TAPICERKI SAMOCHODOWEJ",
  date: "2025-07-10",
  image: "logo2.jpg",
  dynamicImage: "/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg",
  images: [
    "/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-25.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-15.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-23.jpg",
  ],
  description:
    "Poznaj zaawansowane metody głębokiego prania tapicerki w Opolu, które skutecznie usuwają nawet najbardziej uporczywe zabrudzenia i przywracają wnętrzu auta świeżość oraz higienę na długi czas.",
};

export default function DeepCleanPost() {
  return (
    <>
      <h2>Dlaczego warto wybrać głębokie pranie tapicerki?</h2>
      <p>
        Głębokie pranie tapicerki usuwa zabrudzenia z głębokich warstw włókien,
        eliminując nie tylko plamy, ale także alergeny i nieprzyjemne zapachy.
        Dzięki tej metodzie wnętrze samochodu staje się zdrowsze i bardziej
        komfortowe.
      </p>

      <h2>Proces profesjonalnego prania</h2>
      <ul>
        <li>
          <strong>Odkurzanie i przygotowanie</strong> – usuwam luźne
          zanieczyszczenia, kurz i piasek.
        </li>
        <li>
          <strong>Pre-spray</strong> – aplikacja środka, który rozbija tłuste
          plamy i głęboko wnika w zabrudzenia.
        </li>
        <li>
          <strong>Pranie ekstrakcyjne</strong> – maszyna wysokociśnieniowa
          wypłukuje brud i środki czyszczące.
        </li>
        <li>
          <strong>Suszenie</strong> – szybkoschnące metody zapobiegają
          powstawaniu pleśni.
        </li>
        <li>
          <strong>Impregnacja końcowa</strong> – zabezpieczenie tkanin przed
          kolejnymi zabrudzeniami.
        </li>
      </ul>

      <h2>Korzyści dla Twojego auta</h2>
      <p>
        - Usunięcie nawet najstarszych plam po kawie, oleju czy błocie.
        <br />
        - Elastyczność i odświeżenie włókien tapicerki.
        <br />
        - Redukcja alergenów i bakterii, dzięki czemu wnętrze staje się
        zdrowsze.
        <br />- Przywrócenie naturalnego koloru i wyglądu tapicerki.
      </p>

      <h2>Gdzie pracuję?</h2>
      <p>
        Działam głównie w Opolu i okolicach: Ozimek, Prószków, Komprachcice,
        Lubniany oraz w dzielnicach Zaodrze, Wrzoski, Malina i Półwieś.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>
          „Firma MK Studio Opole oferuje kompleksowe czyszczenie samochodu, w
          tym pranie tapicerki, na najwyższym poziomie. Ich usługi
          charakteryzują się profesjonalizmem, dokładnością i użyciem
          nowoczesnych technologii. Po wizycie u nich mój samochód wyglądał jak
          nowy – tapicerka była idealnie czysta, a wnętrze odświeżone.
          Zdecydowanie polecam MK Studio Opole każdemu, kto chce zadbać o swoje
          auto.”
        </p>
        <cite>– Tuśkq T</cite>
      </blockquote>
      <blockquote>
        <p>
          „Jestem bardzo zadowolony z usług "MK Studio" prania tapicerki
          samochodowej. Ich profesjonalizm, skuteczność oraz staranność w
          działaniu przerosły moje oczekiwania. Tapicerka mojego samochodu
          wygląda teraz jak nowa, a obsługa była bardzo miła i pomocna. Gorąco
          polecam!”
        </p>
        <cite>– Tomasz Mazur</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contact-info">
        Jeśli potrzebujesz indywidualnej wyceny lub masz dodatkowe pytania,
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
