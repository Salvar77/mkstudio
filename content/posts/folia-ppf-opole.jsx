import React from "react";
import Link from "next/link";
import {
  Shield,
  Scissors,
  PhoneCall as Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export const meta = {
  id: 5,
  slug: "folia-ppf-opole",
  title: "Folia PPF w Opolu – ochrona lakieru przed uszkodzeniami",
  subtitle: "FOLIA OCHRONNA PPF",
  date: "2025-06-15",
  image: "logo2.jpg",
  dynamicImage: "/logo2.jpg",
  images: ["/logo2.jpg", "/logo2.jpg", "/logo2.jpg", "/logo2.jpg"],
  description:
    "Poznaj zalety folii PPF chroniącej lakier przed kamieniami, zarysowaniami i działaniem czynników atmosferycznych. Dowiedz się, jak dbać o folię i jakie są jej rodzaje.",
};

export default function PpfProtectionPost() {
  return (
    <>
      <h2>Dlaczego warto zainwestować w folię PPF?</h2>
      <p>
        Folia PPF (Paint Protection Film) to przezroczysta warstwa ochronna,
        która amortyzuje uderzenia kamieni, zabezpiecza przed zarysowaniami i
        utrzymuje lakier w idealnym stanie przez lata.
      </p>

      <h2>Rodzaje folii i etapy montażu</h2>
      <ul>
        <li>
          <Shield className="icon" /> <strong>Standardowa folia PPF</strong> –
          ochrona przed drobnymi uszkodzeniami.
        </li>
        <li>
          <Scissors className="icon" />{" "}
          <strong>Folia matowa / błyszcząca</strong> – dodatkowy efekt
          kosmetyczny.
        </li>
        <li>
          <Shield className="icon" /> <strong>Folia samoregenerująca</strong> –
          drobne rysy znikają pod wpływem ciepła.
        </li>
      </ul>

      <h2>Zalety folii PPF</h2>
      <p>
        - Ochrona przed uszkodzeniami mechanicz
        <br />- Odporność na czynniki atmosferyczne i UV
        <br />- Łatwiejsze utrzymanie czystości lakieru
        <br />- Zachowanie fabrycznego połysku i koloru
      </p>

      <h2>Gdzie montuję folię PPF?</h2>
      <p>
        W MK Studio Auto Detailing w Opolu oraz okolicach realizuję kompleksowy
        montaż folii PPF na maskę, błotniki, zderzaki i lusterka.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>„Auto czyściutkie. Mega polecam napewno jeszcze skorzystam 😍”</p>
        <cite>– Karolina Idziorek</cite>
      </blockquote>
      <blockquote>
        <p>
          „Bardzo polecam. Idealnie wykonana praca bez żadnych zastrzeżeń.👍”
        </p>
        <cite>– krzysiek feliks</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contactInfo">
        Zapraszam do kontaktu w celu omówienia szczegółów i wyceny montażu folii
        PPF:
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
          <MapPin className="icon-down-p" /> ul. Częstochowska 44, 45‑020 Opole
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
