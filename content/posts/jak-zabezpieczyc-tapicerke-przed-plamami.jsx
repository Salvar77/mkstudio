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
  id: 1,
  slug: "jak-zabezpieczyc-tapicerke-przed-plamami",
  title: "Jak zabezpieczyć tapicerkę samochodową przed trwałymi plamami?",
  subtitle: "OCHRONA I PIELĘGNACJA TAPICERKI",
  date: "2025-07-08",
  image: "/wlasciciel-mk-studio-kamil-auto-detailing-32.jpg",
  dynamicImage: "/wlasciciel-mk-studio-kamil-auto-detailing-32.jpg",
  mainImageAltText:
    "Właściciel MK Studio Auto Detailing, Kamil, nakłada impregnację na tapicerkę samochodową. Zabezpieczenie tapicerki przed plamami i brudem.",
  images: [
    "/wlasciciel-mk-studio-kamil-auto-detailing-15.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-25.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-20.jpg",
    "/wlasciciel-mk-studio-kamil-auto-detailing-23.jpg",
  ],
  imagesAltText: [
    "Detailing wnętrza samochodu. Profesjonalne pranie i czyszczenie tapicerki w Opolu.",
    "Czyszczenie tapicerki samochodowej w MK Studio Auto Detailing. Ekspert pracuje nad odświeżeniem wnętrza auta.",
    "Zabezpieczanie tapicerki. Końcowy etap auto detailingu wnętrza, po praniu i czyszczeniu.",
    "Pranie tapicerki w samochodzie. Szybki i skuteczny sposób na odświeżenie wnętrza.",
  ],
  description:
    "Uniknij trwałych plam na tapicerce samochodowej dzięki profesjonalnym technikom ochrony i pielęgnacji. Poznaj metody przedłużające świeżość i wartość wnętrza auta.",
};

export default function PreventStainsPost() {
  return (
    <>
      <h2>Kim jestem i dlaczego warto mi zaufać?</h2>
      <p>
        Nazywam się <strong>MK Studio Auto Detailing</strong> z Opola i mam
        ponad 10 lat doświadczenia w auto detailingu. Specjalizuję się w
        kompleksowej ochronie tapicerki samochodowej – od prania ekstrakcyjnego,
        poprzez impregnację, aż po zabezpieczenie przed nowymi zabrudzeniami.
      </p>

      <h2>Dlaczego ochrona tapicerki ma dla mnie znaczenie?</h2>
      <p>
        Wiem, jak trwałe zabrudzenia potrafią obniżyć wartość auta i skrócić
        żywotność materiałów. Dlatego każdą usługę wykonuję z najwyższą
        precyzją, aby tapicerka była chroniona przed plamami po kawie, tłustymi
        śladami czy odciskami, zachowując świeży wygląd na dłużej.
      </p>

      <h2>Efektywne metody, które stosuję</h2>
      <ul>
        <li>
          <strong>Pranie ekstrakcyjne</strong> – usuwam zabrudzenia z głębi
          włókien bez przemaczania materiału.
        </li>
        <li>
          <strong>Impregnacja</strong> – tworzę warstwę hydrofobową, która
          zabezpiecza przed wchłanianiem płynów.
        </li>
        <li>
          <strong>Pielęgnacja skóry</strong> – odżywiam i zabezpieczam skórę,
          aby nie pękała i nie blakła.
        </li>
        <li>
          <strong>Ochrona alcantary</strong> – delikatnie czyści i utrwalam
          strukturę materiału.
        </li>
      </ul>

      <h2>Kroki do trwałej ochrony według mojego schematu</h2>
      <p>
        1. Dokładna diagnostyka stanu tapicerki – sprawdzam rodzaj materiału i
        poziom zabrudzeń.
        <br />
        2. Wstępne czyszczenie i odkurzanie – usuwam luźne zanieczyszczenia.
        <br />
        3. Aplikacja specjalistycznych środków – głębokie penetrowanie
        zabrudzeń.
        <br />
        4. Impregnacja i zabezpieczenie – hydrofobowe powłoki tworzące barierę
        ochronną.
        <br />
        5. Ostateczna kontrola jakości – test wodoodporności i wykończenie
        detali.
      </p>

      <h2>Gdzie dojeżdżam?</h2>
      <p>
        Obsługuję Opole i okolice: Ozimek, Prószków, Komprachcice, Lubniany oraz
        dzielnice Zaodrze, Wrzoski, Malina i Półwieś. Dojeżdżam z pełnym
        wyposażeniem mobilnym.
      </p>

      <h2>Gwarancja jakości i profesjonalizmu</h2>
      <p>
        Na wszystkie usługi udzielam gwarancji satysfakcji. Dzięki wieloletniemu
        doświadczeniu i używaniu profesjonalnych produktów takich marek jak{" "}
        <strong>Tenzi, ProElite, Gyeon, ADBL</strong> zapewniam bezpieczny i
        trwały efekt.
      </p>

      <h2>Opinie klientów</h2>
      <blockquote>
        <p>
          „Zdecydowanie polecam MK Studio ! Profesjonalna obsługa i skuteczne
          usługi. Mój samochód niczym nowy po wizycie u was :) Dzięki !”
        </p>
        <cite>– Łukasz Kuś</cite>
      </blockquote>
      <blockquote>
        <p>
          „Oddałam zakupiony samochód do czyszczenia. Panowie kontaktowali się i
          informowali co i jak, sprawdzili każde miejsce w samochodzie. W
          momencie sprawdzania bagażnika, okazało się, że w miejscu koła
          zapasowego stoi woda a na elementach tapicerki zrobił się grzyb 🤦‍♀️
          bagażnika nie dało się wcześniej otworzyć. Ekipa dołożyła wszelkich
          starań aby wszystko dokładnie wyczyścić, aby było bezpiecznie dla
          zdrowia. Auto wygląda prawie jak nowe 😎 jestem bardzo zadowolona z
          efektu , panowie włożyli dużo czasu i wysiłku . Dziękuję 🙂”
        </p>
        <cite>– Dominika Suchodolska</cite>
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
