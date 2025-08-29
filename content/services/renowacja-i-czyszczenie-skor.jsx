import React from "react";
import Image from "next/image";
import classes from "../../app/oferta/[slug]/page.module.scss";
import Link from "next/link";

export const meta = {
  title:
    "Renowacja i Czyszczenie Skór w Opolu – Przywróć Blask Tapicerce | MK Studio Auto Detailing",
  hero: "/logo-mkstudio-auto-detailing-opole.jpg",
  heroAltText:
    "Renowacja i czyszczenie skór w Opolu. Logo MK Studio Detailing.",
  lead: "Oferuję profesjonalną renowację i czyszczenie tapicerki skórzanej w Opolu. Od dogłębnego czyszczenia i odżywiania po usuwanie przetarć i przywracanie koloru. Przywróć wnętrzu swojego auta luksusowy wygląd i świeżość. Zaufaj 10-letniemu doświadczeniu Kamila z MK Studio.",
  slug: "renowacja-i-czyszczenie-skor",
};

export default function RenowacjaCzyszczenieSkorPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>
        <div className={classes.contentSection__text}>
          <h2>Kompleksowa Renowacja i Czyszczenie Skór – Moja Oferta</h2>
          <p>
            Tapicerka skórzana to synonim luksusu i komfortu w samochodzie.
            Niestety, z czasem ulega ona zużyciu – pojawiają się przetarcia,
            zabrudzenia, a kolor traci swoją głębię. W MK Studio w Opolu
            specjalizuję się w kompleksowej{" "}
            <Link href="/blog/renowacja-i-czyszczenie-skorzanej-tapicerki-opole">
              renowacji i czyszczeniu skór
            </Link>
            , przywracając im fabryczny wygląd i miękkość.
          </p>
          <h3>Etapy Profesjonalnego Czyszczenia i Renowacji Skór:</h3>
          <ul>
            <li>
              <strong>Dogłębne Czyszczenie Tapicerki Skórzanej:</strong> Usuwam
              wszelkie zabrudzenia, kurz, tłuszcz i zanieczyszczenia gromadzące
              się w porach skóry. Stosuję bezpieczne, dedykowane środki, które
              nie uszkadzają struktury materiału.
            </li>
            <li>
              <strong>Odżywianie i Zabezpieczanie Skóry:</strong> Po dokładnym
              oczyszczeniu, skóra jest nawilżana i odżywiana specjalnymi
              preparatami. To przywraca jej elastyczność, zapobiega pękaniu i
              tworzy warstwę ochronną przed dalszymi zabrudzeniami i promieniami
              UV.
            </li>
            <li>
              <strong>Punktowa Renowacja Uszkodzeń:</strong> Zajmuję się
              drobnymi uszkodzeniami, takimi jak przetarcia, zadrapania czy
              pęknięcia. Precyzyjnie uzupełniam ubytki i wyrównuję powierzchnię.
            </li>
            <li>
              <strong>Przywracanie Koloru i Malowanie Skóry:</strong> W
              przypadku wyblaknięć lub miejscowych odbarwień, możliwe jest
              profesjonalne przywrócenie oryginalnego koloru. Używam
              elastycznych farb do skór, które idealnie integrują się z
              materiałem, zapewniając trwały i naturalny efekt.
            </li>
            <li>
              <strong>Hydroizolacja i Ochrona Długoterminowa:</strong> Dodatkowe
              zabezpieczenie hydrofobowe, które odpycha wodę i inne płyny,
              minimalizując ryzyko trwałych plam i ułatwiając codzienną
              pielęgnację. Dowiedz się więcej o tym{" "}
              <Link href="/blog/jak-zabezpieczyc-tapicerke-przed-plamami">
                jak zabezpieczyć tapicerkę przed plamami
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-5.jpg"
            alt="Profesjonalne czyszczenie i renowacja tapicerki skórzanej w samochodzie"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section
        className={`${classes.contentSection} ${classes["contentSection--reverse"]}`}
      >
        <div className={classes.contentSection__text}>
          <h2>Dlaczego Warto Zlecić Renowację Skór Mojemu Studio w Opolu?</h2>
          <p>
            Tapicerka skórzana wymaga specjalistycznej wiedzy i delikatnych
            technik, aby nie naruszyć jej delikatnej struktury. W MK Studio
            stawiam na najwyższą jakość i bezpieczeństwo.
          </p>
          <ul>
            <li>
              <strong>Ekspertyza i Doświadczenie:</strong> Posiadam wieloletnie
              doświadczenie w pracy ze skórą samochodową, co gwarantuje
              skuteczne i bezpieczne metody czyszczenia i renowacji.
            </li>
            <li>
              <strong>Specjalistyczne Produkty:</strong> Korzystam wyłącznie z
              profesjonalnych, certyfikowanych produktów renomowanych marek (np.
              Colourlock, Gliptone, Leatherique).
            </li>
            <li>
              <strong>Osobiste Zaangażowanie Właściciela:</strong> Każdą usługa
              wykonuję osobiście – jako Kamil, właściciel MK Studio. To zapewnia
              dbałość o detale i indywidualne podejście do każdego elementu
              tapicerki.
            </li>
            <li>
              <strong>Długotrwałe Efekty:</strong> Moje metody nie tylko usuwają
              bieżące problemy, ale również zabezpieczają skórę na przyszłość,
              przedłużając jej żywotność i estetykę.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Oddałem do czyszczenia wnętrza drugie auto i tak jak w
              pierwszym przypadku, jestem bardzo zadowolony z jakości wykonanej
              usługi. Szybko, profesjonalnie i w przyzwoitej cenie.
              Polecam..&rdquo;
            </p>
            <footer>
              &mdash; <cite>Marcin Rozycki, Opole</cite>
            </footer>
          </blockquote>

          <h3>Osobiste podejście i precyzja – klucz do sukcesu</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Jako <strong>Kamil</strong>, właściciel MK Studio Auto Detailing,
              osobiście dbam o to, aby każda{" "}
              <Link href="/blog/renowacja-i-czyszczenie-skorzanej-tapicerki-opole">
                tapicerka skórzana
              </Link>{" "}
              odzyskała swoje pierwotne piękno. Moja praca to połączenie pasji,
              wiedzy i rzemieślniczej precyzji.
            </p>
            <p className={classes.contentSection__textP}>
              Zadbana skóra to nie tylko estetyka, ale także komfort i wartość
              Twojego samochodu. Zaufaj doświadczeniu, które gwarantuje
              najwyższą jakość renowacji.
            </p>
          </div>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-12.jpg"
            alt="Profesjonalna renowacja i malowanie skórzanej tapicerki samochodowej"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Galeria Realizacji – Zobacz Metamorfozy Skór</h2>
        <p>
          Przejrzyj zdjęcia przed i po, aby przekonać się, jak dużą różnicę może
          zrobić profesjonalna{" "}
          <Link href="/blog/renowacja-i-czyszczenie-skorzanej-tapicerki-opole">
            renowacja tapicerki skórzanej
          </Link>{" "}
          w Twoim aucie.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Skórzanej Tapicerki
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Renowację Skór</h2>
        <p className={classes.faqLeadText}>
          Masz wątpliwości dotyczące pielęgnacji i renowacji skór? Znajdź
          odpowiedzi na najczęściej zadawane pytania.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak często należy czyścić i konserwować tapicerkę skórzaną?
            </summary>
            <p className={classes.faqAnswer}>
              Zalecam profesjonalne czyszczenie i konserwację tapicerki
              skórzanej co najmniej raz w roku, aby utrzymać ją w doskonałym
              stanie i zapobiec trwałym uszkodzeniom. Regularne odżywianie
              zapobiega wysychaniu i pękaniu skóry. Możesz też zabezpieczyć
              tapicerkę przed plamami, dowiedz się o tym więcej na moim blogu w
              artykule{" "}
              <Link href="/blog/jak-zabezpieczyc-tapicerke-przed-plamami">
                Jak zabezpieczyć tapicerkę przed plamami
              </Link>
              .
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy renowacja koloru jest trwała?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalnie wykonana renowacja koloru z użyciem
              dedykowanych farb do skór jest bardzo trwała. Farba wnika w
              strukturę skóry i jest odporna na ścieranie przy normalnym
              użytkowaniu. Ważne jest jednak, aby po renowacji regularnie
              konserwować tapicerkę.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa proces renowacji skór?
            </summary>
            <p className={classes.faqAnswer}>
              Czas renowacji zależy od stopnia uszkodzeń i zakresu usługi.
              Standardowe czyszczenie i odżywianie może trwać kilka godzin,
              natomiast kompleksowa renowacja z malowaniem i naprawą większych
              uszkodzeń może zająć od 1 do 3 dni. Dokładny czas ustalam po
              ocenie stanu tapicerki.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mogę samodzielnie czyścić skórę?
            </summary>
            <p className={classes.faqAnswer}>
              Podstawowe, regularne odkurzanie i przecieranie wilgotną szmatką
              jest wskazane. Jednak do głębokiego czyszczenia i usuwania
              trudnych plam zalecam użycie profesjonalnych środków i technik,
              aby uniknąć uszkodzenia skóry. Niewłaściwe produkty mogą wysuszyć,
              odbarwić lub uszkodzić tapicerkę.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
