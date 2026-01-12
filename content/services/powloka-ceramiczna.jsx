import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title:
    "Powłoka Ceramiczna w Opolu – Długotrwała Ochrona Lakieru | MK Studio Auto Detailing",
  hero: "/logo-mkstudio-auto-detailing-opole.jpg",
  heroAltText: "Powłoka ceramiczna w Opolu. Logo MK Studio Auto Detailing.",
  lead: "Zabezpiecz lakier swojego samochodu powłoką ceramiczną w MK Studio Auto Detailing w Opolu. Oferuję profesjonalną aplikację, która zapewnia wieloletnią ochronę przed rysami, brudem, promieniami UV i ułatwia pielęgnację. Nadaj swojemu autu niezrównany blask i trwałość.",
  slug: "powloka-ceramiczna",
};

export default function PowlokaCeramicznaPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Powłoka Ceramiczna – Niezrównana Ochrona i Blask Lakieru</h2>
          <p>
            <Link href="/blog/powloka-ceramiczna-opole">
              Powłoka ceramiczna
            </Link>{" "}
            to zaawansowane zabezpieczenie lakieru samochodowego, które
            rewolucjonizuje jego ochronę i wygląd. Tworzy na powierzchni
            karoserii twardą, niewidzialną warstwę, która skutecznie chroni
            przed mikrozarysowaniami, szkodliwymi czynnikami zewnętrznymi i
            ułatwia utrzymanie czystości. W moim studio detailingowym w Opolu
            oferuję profesjonalną aplikację powłok ceramicznych, gwarantując
            wieloletnią ochronę i spektakularny efekt wizualny.
          </p>
          <h3>Korzyści z Aplikacji Mojej Powłoki Ceramicznej:</h3>
          <ul>
            <li>
              <strong>Wieloletnia Ochrona Lakieru:</strong> Moja powłoka
              ceramiczna tworzy trwałą barierę ochronną, która zabezpiecza
              lakier przed działaniem promieni UV, kwaśnych deszczy, ptasich
              odchodów, soli drogowej i drobnych zarysowań.
            </li>
            <li>
              <strong>Niesamowity Efekt Hydrofobowy:</strong> Powierzchnia
              pokryta ceramiką staje się niezwykle śliska, co sprawia, że woda i
              brud nie przylegają do lakieru, a spływają z niego w postaci
              kropelek (efekt "samooczyszczania").
            </li>
            <li>
              <strong>Głębia Koloru i Połysk:</strong> Powłoka ceramiczna
              podkreśla głębię koloru lakieru i nadaje mu spektakularny,
              lustrzany połysk, który utrzymuje się przez długi czas.
            </li>
            <li>
              <strong>Ułatwiona Pielęgnacja:</strong> Dzięki właściwościom
              hydrofobowym i antystatycznym, mycie samochodu staje się znacznie
              szybsze i prostsze, a brud mniej przylega do karoserii.
            </li>
            <li>
              <strong>Wzrost Wartości Pojazdu:</strong> Zabezpieczony lakier
              zachowuje swój idealny wygląd przez lata, co ma pozytywny wpływ na
              wartość samochodu przy ewentualnej odsprzedaży.
            </li>
          </ul>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/galeria-powloka-ceramiczna-1.jpg"
            alt="Samochód z nałożoną powłoką ceramiczną, lśniący blask"
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
          <h2>Proces Aplikacji Powłoki Ceramicznej w Moim Studio</h2>
          <p>
            Aplikacja powłoki ceramicznej to skomplikowany proces, który wymaga
            precyzji, odpowiednich warunków i doświadczenia. W MK Studio Auto
            Detaling dbam o każdy etap, aby zapewnić maksymalną trwałość i
            skuteczność zabezpieczenia.
          </p>
          <ul>
            <li>
              <strong>Wieloetapowe Przygotowanie Lakieru:</strong> Przed
              aplikacją ceramiki lakier jest dokładnie myty, dekontaminowany i
              poddawany jedno- lub wieloetapowej korekcie, aby usunąć wszelkie
              rysy i defekty. To klucz do perfekcyjnego przylegania powłoki.
            </li>
            <li>
              <strong>Odtłuszczanie i Inspekcja:</strong> Po korekcie lakier
              jest wielokrotnie odtłuszczany specjalnymi preparatami, aby usunąć
              wszelkie pozostałości past polerskich i zapewnić idealnie czystą
              powierzchnię. Następnie przeprowadzam szczegółową inspekcję pod
              specjalnym oświetleniem.
            </li>
            <li>
              <strong>Profesjonalna Aplikacja Powłoki:</strong>{" "}
              <Link href="/blog/powloka-ceramiczna-opole">
                Powłoka ceramiczna
              </Link>{" "}
              jest aplikowana w kontrolowanych warunkach, panel po panelu, z
              zachowaniem odpowiednich temperatur i wilgotności. Każda warstwa
              jest precyzyjnie rozprowadzana i docierana przeze mnie.
            </li>

            <li>
              <strong>Wskazówki Dotyczące Pielęgnacji:</strong> Po odbiorze
              samochodu otrzymasz szczegółowe wskazówki dotyczące prawidłowej
              pielęgnacji pojazdu pokrytego powłoką ceramiczną, abyś mógł
              cieszyć się jej właściwościami przez długi czas.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Pełen profesjonalizm. Samochód wygląda jak nowy. Szybko,
              sprawnie i bezproblemowo. Drugie auto już też się robi i efekt
              będzie na pewno piorunujący. Z czystym sumieniem każdemu mogę
              polecić MK Studio.&rdquo;
            </p>
            <footer>
              &mdash; <cite>Łukasz Halkiewicz, Opole</cite>
            </footer>
          </blockquote>

          <h3>Usługę Wykonuję Osobiście – Gwarancja Perfekcji</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Wszystkie usługi wykonuję osobiście – <strong>Kamil</strong>,
              właściciel MK Studio Auto Detailing. Masz pewność, że Twoje auto
              trafia w moje ręce, w ręce fachowca z pasją i wieloletnim
              doświadczeniem.
            </p>
            <p className={classes.contentSection__textP}>
              Moja wiedza i umiejętności zdobyte przez lata pracy w branży auto
              detailingu gwarantują najwyższą jakość świadczonych usług.
              Osobiste zaangażowanie w każdy projekt to fundament zaufania i
              perfekcyjnych rezultatów.
            </p>
          </div>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/galeria-powloka-ceramiczna-2.jpg"
            alt="Technik aplikujący powłokę ceramiczną na lakier samochodowy"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Moja Galeria Realizacji – Powłoka Ceramiczna</h2>
        <p>
          Zobacz efekty moich prac i przekonaj się, jak powłoka ceramiczna
          podkreśla blask i chroni lakier samochodowy.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Powłok Ceramicznych
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Powłokę Ceramiczną</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące aplikacji i właściwości powłok ceramicznych?
          Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym jest powłoka ceramiczna i jak działa?
            </summary>
            <p className={classes.faqAnswer}>
              Powłoka ceramiczna to zaawansowany produkt na bazie nanocząsteczek
              dwutlenku krzemu (SiO2), który po aplikacji na lakier tworzy
              twardą, krystaliczną warstwę ochronną. Działa jak niewidzialna
              tarcza, chroniąc lakier przed zarysowaniami, chemikaliami,
              promieniami UV i ułatwiając jego czyszczenie dzięki właściwościom
              hydrofobowym.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo utrzymuje się powłoka ceramiczna?
            </summary>
            <p className={classes.faqAnswer}>
              Trwałość powłoki ceramicznej zależy od jej rodzaju
              (jednowarstwowa, wielowarstwowa), jakości produktu oraz sposobu
              pielęgnacji samochodu. Profesjonalne powłoki ceramiczne, które
              oferuję w moim studio, gwarantują ochronę od 2 do nawet 5 lat.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy powłoka ceramiczna chroni przed wszystkimi zarysowaniami?
            </summary>
            <p className={classes.faqAnswer}>
              Powłoka ceramiczna znacząco zwiększa odporność lakieru na
              mikrozarysowania i drobne uszkodzenia, ale nie czyni go
              niezniszczalnym. Nadal należy dbać o prawidłową technikę mycia i
              unikać celowego zarysowania. Chroni jednak lakier znacznie lepiej
              niż tradycyjny wosk.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy mogę samodzielnie nałożyć powłokę ceramiczną?
            </summary>
            <p className={classes.faqAnswer}>
              Aplikacja powłoki ceramicznej to proces wymagający dużej wiedzy,
              precyzji i odpowiednich warunków (czyste, bezpyłowe środowisko,
              kontrolowana temperatura i wilgotność). Niewłaściwa aplikacja może
              prowadzić do powstawania smug, zacieków i konieczności
              mechanicznego usuwania powłoki. Zawsze zalecam zlecenie tego
              zadania profesjonalistom.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak dbać o samochód po nałożeniu powłoki ceramicznej?
            </summary>
            <p className={classes.faqAnswer}>
              Po aplikacji powłoki ceramicznej pielęgnacja samochodu staje się
              łatwiejsza. Zalecam regularne mycie ręczne (lub na myjni
              bezdotykowej) z użyciem szamponów dedykowanych dla powłok
              ceramicznych. Należy unikać myjni automatycznych ze szczotkami
              oraz agresywnych środków chemicznych. Regularne odżywianie powłoki
              (co 6-12 miesięcy) może przedłużyć jej żywotność.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
