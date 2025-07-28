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
  id: 4,
  slug: "korekta-lakieru-opole",
  title:
    "Korekta lakieru samochodowego w Opolu – usuń rysy i przywróć głębię koloru",
  subtitle: "PROFESJONALNA KOREKTA LAKIERU",
  date: "2025-06-25",
  image: "logo2.jpg",
  dynamicImage: "/galeria-korekta-lakieru-1.jpg",
  images: [
    "/galeria-korekta-lakieru-1.jpg",
    "/galeria-korekta-lakieru-2.jpg",
    "/galeria-korekta-lakieru-3.jpg",
    "/galeria-korekta-lakieru-1.jpg",
  ],
  description:
    "Dowiedz się, jak w MK Studio Auto Detailing w Opolu stosujemy zaawansowaną korektę lakieru, by usunąć rysy, hologramy i przywrócić głębię koloru Twojego samochodu.",
};

export default function PaintCorrectionPost() {
  return (
    <>
      <h2>Dlaczego warto zainwestować w korektę lakieru?</h2>
      <p>
        Nawet minimalne zarysowania i matowe wykończenie obniżają estetykę auta
        i jego wartość rynkową. W <strong>MK Studio Auto Detailing</strong>{" "}
        stosuję precyzyjne techniki polerowania, aby wyrównać powierzchnię,
        usunąć hologramy i przywrócić fabryczny połysk.
      </p>

      <h2>Proces korekty – krok po kroku</h2>
      <ul>
        <li>
          <Wrench className="icon" /> <strong>Analiza lakieru</strong> – badam
          grubość powłoki, rodzaj defektów i optymalizuję dobór past.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Oczyszczanie</strong> – usuwam
          zabrudzenia i stare powłoki ochronne.
        </li>
        <li>
          <Wrench className="icon" />{" "}
          <strong>Polerowanie wielostopniowe</strong> – od grubych past
          ściernych do ultrajemnych, by uzyskać gładką taflę.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Wykończenie</strong> – nadanie
          głębokiego połysku i usunięcie mikrorys.
        </li>
      </ul>

      <h2>Korzyści dla Twojego samochodu</h2>
      <p>
        - Przywrócenie lustrzanego połysku i intensywności koloru.
        <br />
        - Usunięcie rys i hologramów.
        <br />
        - Zwiększona odporność na czynniki atmosferyczne.
        <br />- Wyższa wartość odsprzedaży.
      </p>

      <h2>Gdzie wykonuję usługę?</h2>
      <p>
        Studio MK Studio Auto Detailing znajduje się w Opolu przy ul.
        Częstochowskiej 44. Dojeżdżam również do Ozimka, Prószkowa, Komprachcic,
        Lubnian i okolic.
      </p>

      <h2>Opinie zadowolonych klientów</h2>
      <blockquote>
        <p>
          „Szanowni! Jestem bardzo zadowolony z usług firmy MK Studio… itd. 😜
          skóry w samochodzie wyglądają, jakby nikt na nich nie siadał 🤯
          totalnie jak nowe! Lakier, pomimo że samochód nie jest nowy to super
          odświeżony🤯. A poza tym, bardzo fajne podejście do klienta i
          profesjonalne podejście do „sprzętu”. POLECAM!”
        </p>
        <cite>– Mateusz Korzeniowski</cite>
      </blockquote>
      <blockquote>
        <p>
          „Renowacja tapicerki skorzanej na 5+. Przy okazji Pan Kamil umyl i
          nawoskowal samochod. lakier błyszczy pięknie! Polecam!”
        </p>
        <cite>– Wojtek Lipczynski</cite>
      </blockquote>

      <h2>Masz pytania? Skontaktuj się ze mną</h2>
      <p className="contact-info">
        Zapraszam do kontaktu w celu omówienia szczegółów i wyceny usługi:
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <Phone className="icon-down-p" />{" "}
          <a href="tel:+48690570800">690 570 800</a>
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
