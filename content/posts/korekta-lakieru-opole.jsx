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
import classes from "../../app/blog/[slug]/page.module.scss";

export const meta = {
  id: 4,
  slug: "korekta-lakieru-opole",
  title:
    "Korekta lakieru samochodowego w Opolu – usuń rysy i przywróć głębię koloru",
  subtitle: "PROFESJONALNA KOREKTA LAKIERU",
  date: "2025-06-25",
  image: "/galeria-korekta-lakieru-1.jpg",
  dynamicImage: "/galeria-korekta-lakieru-1.jpg",
  mainImageAltText:
    "Głęboka korekta lakieru w MK Studio Auto Detailing . Zdjęcie przedstawiające polerowanie samochodu, które usuwa rysy i przywraca głębię koloru.",
  images: [
    "/galeria-korekta-lakieru-1.jpg",
    "/galeria-korekta-lakieru-2.jpg",
    "/galeria-korekta-lakieru-3.jpg",
    "/galeria-korekta-lakieru-1.jpg",
  ],
  imagesAltText: [
    "Zdjęcie po korekcie lakieru. Zdjęcie w warsztacie w Opolu pokazujące różnicę w głębi koloru.",
    "Zabezpieczone auto w studiu detailingowym po korekcie lakieru. Efekt końcowy pracy w MK Studio Opole.",
    "Samochód w studiu detailingowym po zabiegu korekty lakieru. Widoczna głębia i szklisty połysk koloru.",
    "Efekt końcowy korekty lakieru. Lśniące auto bez zarysowań, gotowe do odbioru przez klienta w Opolu.",
  ],
  description:
    "Dowiedz się, jak w MK Studio Auto Detailing w Opolu stosuję zaawansowaną korektę lakieru, by usunąć rysy, hologramy i przywrócić głębię koloru Twojego samochodu.",
};

export default function PaintCorrectionPost() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Dlaczego warto zainwestować w korektę lakieru?
      </h2>
      <p className={classes.textShadow}>
        Nawet minimalne zarysowania i matowe wykończenie obniżają estetykę auta
        i jego wartość rynkową. W <strong>MK Studio Auto Detailing</strong>{" "}
        stosuję precyzyjne techniki{" "}
        <Link href="/oferta/korekta-lakieru">polerowania</Link>, aby wyrównać
        powierzchnię, usunąć hologramy i przywrócić fabryczny połysk lakierowi.
      </p>

      <h2 className={classes.blogTitle}>Proces korekty – krok po kroku</h2>
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
          <strong>
            <Link href="/oferta/korekta-lakieru">
              Polerowanie wielostopniowe
            </Link>
          </strong>{" "}
          – od grubych past ściernych do ultrajemnych, by uzyskać gładką taflę.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Wykończenie</strong> – nadanie
          głębokiego połysku i usunięcie mikrorys na lakierze.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>Korzyści dla Twojego samochodu</h2>
      <p className={classes.textShadow}>
        - Przywrócenie lustrzanego połysku i intensywności koloru.
        <br />
        - Usunięcie rys i hologramów.
        <br />
        - Zwiększona odporność na czynniki atmosferyczne.
        <br />- Wyższa wartość odsprzedaży.
      </p>

      <h2 className={classes.blogTitle}>Gdzie wykonuję usługę?</h2>
      <p className={classes.textShadow}>
        Studio MK Studio Auto Detailing znajduje się w Opolu przy ul.
        Częstochowskiej 44. Dojeżdżam również do <strong>Ozimka</strong>,{" "}
        <strong>Prószkowa</strong>, <strong>Komprachcic</strong>,{" "}
        <strong>Lubnian</strong> i okolic.
      </p>

      <h2 className={classes.blogTitle}>Opinie zadowolonych klientów</h2>
      <blockquote>
        <p className={classes.textShadowD}>
          „Szanowni! Jestem bardzo zadowolony z usług firmy MK Studio… itd. 😜
          skóry w samochodzie wyglądają, jakby nikt na nich nie siadał 🤯
          totalnie jak nowe! Lakier, pomimo że samochód nie jest nowy to super
          odświeżony🤯. A poza tym, bardzo fajne podejście do klienta i
          profesjonalne podejście do „sprzętu”. POLECAM!”
        </p>
        <cite>– Mateusz Korzeniowski</cite>
      </blockquote>
      <blockquote>
        <p className={classes.textShadowD}>
          „Renowacja tapicerki skorzanej na 5+. Przy okazji Pan Kamil umyl i
          nawoskowal samochod. lakier błyszczy pięknie! Polecam!”
        </p>
        <cite>– Wojtek Lipczynski</cite>
      </blockquote>

      <h2 className={classes.blogContactTitle}>
        Masz pytania? Skontaktuj się ze mną
      </h2>
      <p className={classes.contactInfo}>
        Jeśli chcesz uzyskać indywidualną wycenę{" "}
        <Link href="/oferta/korekta-lakieru" className={classes.textLink}>
          korekty lakieru
        </Link>{" "}
        lub masz dodatkowe pytania, zapraszam do kontaktu w celu omówienia
        szczegółów i wyceny usługi:
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
          <MapPin className={classes.iconDown} /> ul. Częstochowskiej 44, 45-020
          Opole
        </div>
        <div className={classes.contactItem}>
          <Clock className={classes.iconDown} /> Pon–Pt: 07:00–20:00, Sob:
          08:00–18:00
        </div>
      </div>
      <div className={classes.ctaWrapper}>
        <Link href="/kontakt">
          <span className={classes.ctaButton}>
            Przejdź do formularza kontaktowego
          </span>
        </Link>
      </div>
    </>
  );
}
