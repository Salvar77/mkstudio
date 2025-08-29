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
  id: 5,
  slug: "powloka-ceramiczna-opole",
  title:
    "Powłoka ceramiczna samochodu w Opolu – trwała ochrona i głęboki połysk",
  subtitle: "CERAMICZNA POWŁOKA OCHRONNA",
  date: "2025-06-15",
  image: "/galeria-powloka-ceramiczna-3.jpg",
  dynamicImage: "/galeria-powloka-ceramiczna-3.jpg",
  mainImageAltText:
    "Główny obraz bloga. Dwa samochody, BMW E30 i nowoczesny SUV, z nałożoną powłoką ceramiczną, prezentujące głęboki połysk w studiu detailingowym w Opolu.",
  images: [
    "/galeria-powloka-ceramiczna-1.jpg",
    "/galeria-powloka-ceramiczna-2.jpg",
    "/galeria-powloka-ceramiczna-1.jpg",
    "/galeria-powloka-ceramiczna-3.jpg",
  ],
  imagesAltText: [
    "Samochód Skoda Superb z nałożoną powłoką ceramiczną. Widoczny głęboki połysk lakieru i efekt odbicia światła w MK Studio Opole.",
    "Powłoka ceramiczna na lakierze czarnego sedana. Zdjęcie z góry ukazujące hydrofobowy efekt i ochronę przed brudem.",
    "BMW po nałożeniu powłoki ceramicznej. Zdjęcie przedstawia lśniący lakier, bez zarysowań, gotowy do jazdy.",
    "Efekt finalny po nałożeniu powłoki ceramicznej. Skoda z lśniącym lakierem, zabezpieczone na lata.",
  ],
  description:
    "Odkryj zalety powłoki ceramicznej w Opolu: długotrwała ochrona lakieru, odporność na zabrudzenia i promieniowanie UV oraz efekt głębokiego połysku.",
};

export default function CeramicCoatingPost() {
  return (
    <>
      <h2 className={classes.blogTitle}>
        Powłoka ceramiczna w Opolu: Niezawodna tarcza dla lakieru Twojego auta
      </h2>
      <p className={classes.textShadow}>
        W <strong>MK Studio Auto Detailing</strong> doskonale rozumiem, że
        lakier samochodowy to coś więcej niż tylko sam kolor. To wizytówka
        Twojego pojazdu, która z czasem traci blask i jest narażona na
        uszkodzenia. Właśnie dlatego postawiłem na profesjonalną{" "}
        <strong>
          <Link href="/oferta/powloka-ceramiczna">powłokę ceramiczną</Link>
        </strong>
        , która działa jak druga skóra dla Twojego auta. To zaawansowana
        technologia, która tworzy na lakierze niewidoczną, twardą warstwę
        ochronną, znacząco wydłużając jego żywotność i estetykę. W moim studio w
        Opolu, ja, Kamil, osobiście zajmuję się każdym etapem aplikacji,
        gwarantując tym najwyższą jakość i trwałość.
      </p>

      <h2 className={classes.blogTitle}>
        Mój proces aplikacji powłoki ceramicznej – precyzja i doświadczenie
      </h2>
      <p className={classes.textShadow}>
        Aplikacja powłoki ceramicznej to skomplikowany, wieloetapowy proces,
        który wymaga precyzji i odpowiednich warunków. W{" "}
        <strong> MK Studio Auto Detailing</strong> nie idę na skróty – każdy
        krok jest dla mnie kluczowy aby uzyskać perfekcję i trwały efekt.
      </p>
      <ul>
        <li>
          <Wrench className="icon" /> <strong>Przygotowanie powierzchni</strong>{" "}
          – Zaczynam od dokładnego mycia i osuszania, a następnie
          przeprowadzanego ręcznie{" "}
          <Link href="/oferta/korekta-lakieru">korekty lakieru</Link>. To
          kluczowy etap, który usuwa wszelkie mikrorysy, hologramy i defekty,
          zapewniając idealnie gładką powierzchnię. Tylko na takim podłożu
          powłoka może w pełni związać się z lakierem.
        </li>
        <li>
          <Droplet className="icon" />{" "}
          <strong>Deironizacja i odtłuszczanie</strong> – Następnie usuwam
          wszelkie zanieczyszczenia chemiczne, takie jak cząstki metaliczne
          (opiłki z klocków hamulcowych) oraz osady drogowe, używając
          specjalistycznych preparatów. Proces ten zapewnia, że lakier jest
          absolutnie czysty i gotowy do przyjęcia powłoki.
        </li>
        <li>
          <Wrench className="icon" />{" "}
          <strong>Aplikacja warstwy ceramicznej</strong> – Przy użyciu
          specjalnych aplikatorów, nakładam powłokę ceramiczną, dbając o
          równomierne pokrycie każdego elementu. To praca wymagająca spokoju i
          precyzji, aby uniknąć smug i nierówności.
        </li>
        <li>
          <Droplet className="icon" /> <strong>Wypalanie i utwardzanie</strong>{" "}
          – Po nałożeniu powłoki, pozostawiam samochód w kontrolowanych
          warunkach, aby powłoka mogła prawidłowo związać się z lakierem i w
          pełni się utwardzić. Odpowiednia temperatura i wilgotność są tu
          kluczowe.
        </li>
        <li>
          <Wrench className="icon" /> <strong>Kontrola jakości</strong> – Zanim
          oddam Ci kluczyki, dokładnie sprawdzam każdy element, upewniając się,
          że uzyskaliśmy pożądany efekt hydrofobowy, głębię koloru i lustrzany
          połysk.
        </li>
      </ul>

      <h2 className={classes.blogTitle}>
        Dlaczego warto wybrać moje powłoki ceramiczne?
      </h2>
      <p className={classes.textShadow}>
        Aplikacja powłoki ceramicznej w moim studio{" "}
        <strong>MK Studio Auto Detailing</strong> w Opolu to inwestycja w
        przyszłość Twojego samochodu. Zyskujesz:
        <br />- <strong>Długotrwała ochrona</strong>: Powłoka chroni lakier
        przed drobnymi zarysowaniami, ptasimi odchodami, solą drogową,
        promieniowaniem UV i kwaśnymi deszczami.
        <br />- <strong>Niesamowity efekt hydrofobowy</strong>: Brud i woda nie
        przylegają do lakieru, co sprawia, że mycie jest znacznie łatwiejsze i
        szybsze.
        <br />- <strong>Głębia koloru i połysk</strong>: Powłoka ceramiczna
        wydobywa z lakieru jego naturalną głębię i nadaje mu szklisty, lustrzany
        połysk, który przyciąga wzrok.
        <br />- <strong>Trwałość na lata</strong>: Moje powłoki ceramiczne
        zapewniają ochronę nawet do 3 lat, co sprawia, że Twój samochód będzie
        wyglądał jak nowy przez długi czas.
      </p>

      <h2 className={classes.blogTitle}>Opinie zadowolonych klientów</h2>
      <blockquote>
        <p className={classes.textShadowD}>
          „Mila profesjonalna obsluga auto Jak z salonu polecam”
        </p>
        <cite>– Piotr - Pavel Konobrock</cite>
      </blockquote>
      <blockquote>
        <p className={classes.textShadowD}>
          „Polecam firmę. Jestem zadowolona z wykonanych usług w moim aucie, I
          profesjonalnym podejściu do klienta. Szybki termin , niskie ceny.”
        </p>
        <cite>– Joanna Dec</cite>
      </blockquote>

      <h2 className={classes.blogContactTitle}>
        Chcesz zabezpieczyć swój samochód? Skontaktuj się ze mną!
      </h2>
      <p className={classes.contactInfo}>
        Zapraszam do kontaktu, jeśli chcesz dowiedzieć się więcej o{" "}
        <Link href="/oferta/powloka-ceramiczna" className={classes.textLink}>
          powłoce ceramicznej
        </Link>
        , omówić szczegóły oferty lub umówić się na indywidualną wycenę w moim
        studio w Opolu.
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
        <Link href="/kontakt">
          <span className={classes.ctaButton}>
            Przejdź do formularza kontaktowego
          </span>
        </Link>
      </div>
    </>
  );
}
