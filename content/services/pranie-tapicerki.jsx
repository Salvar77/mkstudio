import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title:
    "Pranie Tapicerki i Detailing Wnętrza w Opolu – Świeżość i Czystość | MK Studio Auto Detailing",
  hero: "/logo-mkstudio-auto-detailing-opole.jpg",
  heroAltText:
    "Pranie tapicerki i detailing wnętrza w Opolu. Logo MK Studio Auto Detailing.",
  lead: "Oferuję profesjonalne pranie tapicerki samochodowej i kompleksowy detailing wnętrza w Opolu. Usuwam plamy, nieprzyjemne zapachy i bakterie, przywracając świeżość i higienę. Zadbaj o komfort i zdrowie w swoim aucie z MK Studio Auto Detailing.",
  slug: "pranie-tapicerki",
};

export default function PranieTapicerkiPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Kompleksowe Pranie Tapicerki i Detailing Wnętrza</h2>
          <p>
            Wnętrze samochodu to Twoja osobista przestrzeń, która z czasem
            gromadzi kurz, brud, alergeny i nieprzyjemne zapachy. W MK Studio
            Auto Detailing w Opolu oferuję profesjonalne pranie tapicerki
            samochodowej oraz kompleksowy detailing wnętrza, który przywróci
            Twojemu autu higieniczną czystość, świeżość i komfort.
          </p>
          <h3>Co Obejmuje Detailing Wnętrza i Pranie Tapicerki?</h3>
          <ul>
            <li>
              <strong>Dogłębne Odkurzanie i Czyszczenie:</strong> Usuwam kurz,
              piasek i wszelkie luźne zanieczyszczenia z każdego zakamarka
              wnętrza, w tym z trudno dostępnych miejsc.
            </li>
            <li>
              <strong>Pranie Tapicerki Materiałowej:</strong> Metoda
              ekstrakcyjna pozwala na{" "}
              <Link href="/blog/glebokie-pranie-tapicerki-opole">
                dogłębne usunięcie plam, brudu
              </Link>{" "}
              i alergenów z siedzeń, dywaników, podsufitki i boczków. Tapicerka
              odzyskuje świeży wygląd i kolor.
            </li>
            <li>
              <strong>Czyszczenie i Konserwacja Skór:</strong> Jeśli Twoje auto
              posiada skórzaną tapicerkę, zostanie ona dokładnie wyczyszczona
              specjalistycznymi środkami, a następnie odżywiona i zabezpieczona
              preparatami chroniącymi przed wysychaniem i pękaniem.
            </li>
            <li>
              <strong>Czyszczenie Elementów Plastikowych i Winyli:</strong>{" "}
              Kokpit, panele drzwiowe, konsola centralna i inne elementy
              plastikowe są czyszczone i zabezpieczane, aby odzyskały swój
              fabryczny wygląd i były odporne na kurz.
            </li>
            <li>
              <strong>Ozonowanie Wnętrza:</strong> Proces ozonowania skutecznie
              eliminuje bakterie, wirusy, grzyby i wszelkie nieprzyjemne zapachy
              (np. dym papierosowy, zapach zwierząt, wilgoć), pozostawiając
              wnętrze sterylnie czyste i świeże.
            </li>
            <li>
              <strong>Czyszczenie Szyb i Luster:</strong> Wszystkie szyby i
              lusterka są dokładnie czyszczone, aby zapewnić idealną
              przejrzystość bez smug.
            </li>
          </ul>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-16.jpg"
            alt="Profesjonalne pranie tapicerki samochodowej"
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
          <h2>Dlaczego Warto Wybrać Detailing Wnętrza w MK Studio w Opolu?</h2>
          <p>
            Czyste i zadbane wnętrze samochodu to nie tylko estetyka, ale także
            zdrowie i komfort podróżowania. W MK Studio Auto Detailing dbam o
            każdy szczegół, abyś mógł cieszyć się nieskazitelną czystością.
          </p>
          <ul>
            <li>
              <strong>Wieloletnie Doświadczenie:</strong> Posiadam ponad 10 lat
              praktyki w detailingu wnętrz, co gwarantuje skuteczność i
              bezpieczeństwo stosowanych metod.
            </li>
            <li>
              <strong>Bezpieczne i Skuteczne Produkty:</strong> Używam wyłącznie
              profesjonalnych, bezpiecznych dla zdrowia i tapicerki środków
              czyszczących renomowanych marek (np. Koch-Chemie, ADBL), które
              skutecznie usuwają zabrudzenia bez uszkadzania materiałów.
            </li>
            <li>
              <strong>Osobiste Wykonanie Przez Właściciela:</strong> Cały proces
              detailingu wnętrza wykonuję osobiście – Kamil, właściciel MK
              Studio. Masz pewność, że Twoje auto jest w rękach doświadczonego
              eksperta, który dba o każdy, nawet najmniejszy detal.
            </li>
            <li>
              <strong>Eliminacja Zapachów i Alergenów:</strong> Dzięki
              profesjonalnym technikom prania i ozonowania, wnętrze Twojego auta
              będzie wolne od nieprzyjemnych zapachów, bakterii i alergenów.
            </li>
            <li>
              <strong>Indywidualne Podejście:</strong> Każde wnętrze samochodu
              jest inne. Dokładnie oceniam stan tapicerki i elementów, aby
              dobrać najskuteczniejsze metody czyszczenia i konserwacji.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Profesjonalne podejście do tematu. Tapicerka odświeżona,
              wygląda lepiej niż nowa. Auto czyste i wysprzątane. Na pewno
              skorzystam ponownie. Polecam&rdquo;
            </p>
            <footer>
              &mdash; <cite>Krzysiek Miklaszewski, Opole</cite>
            </footer>
          </blockquote>

          <h3>Usługę Wykonuje Właściciel – Kamil z MK Studio Auto Detailing</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Wszystkie usługi{" "}
              <Link href="/blog/glebokie-pranie-tapicerki-opole">
                detailingu wnętrza i prania tapicerki
              </Link>{" "}
              wykonuję osobiście – <strong>Kamil</strong>, właściciel MK Studio
              Auto Detailing. Dzięki temu masz pewność, że Twoje auto trafia w
              ręce fachowca z pasją i wieloletnim doświadczeniem w branży.
            </p>
            <p className={classes.contentSection__textP}>
              Moja wiedza i umiejętności, doskonalone przez lata pracy z
              różnorodnymi materiałami i stopniami zabrudzeń, gwarantują
              najwyższą jakość świadczonych usług. Osobiste zaangażowanie w
              każdy projekt to fundament zaufania i perfekcyjnych rezultatów,
              które przekładają się na zdrowie i komfort Twojej podróży.
            </p>
          </div>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-23.jpg"
            alt="Profesjonalny detailing wnętrza samochodu"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Galeria Realizacji – Detailing Wnętrza</h2>
        <p>
          Zobacz efekty moich prac i przekonaj się, jak dużą różnicę może zrobić
          profesjonalne pranie tapicerki i detailing wnętrza Twojego samochodu.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Wnętrz
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Pranie Tapicerki</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące prania tapicerki i detailingu wnętrza? Poniżej
          znajdziesz odpowiedzi na najczęściej zadawane pytania.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak często należy prać tapicerkę samochodową?
            </summary>
            <p className={classes.faqAnswer}>
              Częstotliwość prania tapicerki zależy od intensywności użytkowania
              samochodu. Zazwyczaj zaleca się profesjonalne pranie tapicerki
              przynajmniej raz w roku, aby usunąć nagromadzony brud, alergeny i
              nieprzyjemne zapachy. W przypadku częstego przewożenia dzieci lub
              zwierząt, warto rozważyć częstsze czyszczenie.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy pranie tapicerki jest bezpieczne dla materiału?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalne pranie tapicerki metodą ekstrakcyjną jest
              bezpieczne dla większości materiałów. Używam specjalistycznych
              środków czyszczących i sprzętu, które skutecznie usuwają brud,
              jednocześnie chroniąc tkaninę przed uszkodzeniem czy odbarwieniem.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa pranie tapicerki i detailing wnętrza?
            </summary>
            <p className={classes.faqAnswer}>
              Czas trwania usługi zależy od stopnia zabrudzenia wnętrza i
              zakresu prac. Standardowe pranie tapicerki może zająć od 3 do 6
              godzin, natomiast kompleksowy detailing wnętrza (wraz z
              ozonowaniem i czyszczeniem wszystkich elementów) może potrwać
              nawet cały dzień. Dokładny czas ustalany jest po ocenie stanu
              pojazdu.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy ozonowanie usunie wszystkie nieprzyjemne zapachy?
            </summary>
            <p className={classes.faqAnswer}>
              Ozonowanie jest bardzo skuteczną metodą eliminacji większości
              nieprzyjemnych zapachów organicznych (np. dym papierosowy, zapach
              zwierząt, pleśń). W przypadku bardzo intensywnych i długotrwałych
              zapachów, może być konieczne powtórzenie zabiegu lub zastosowanie
              dodatkowych metod.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak dbać o tapicerkę po praniu?
            </summary>
            <p className={classes.faqAnswer}>
              Po profesjonalnym praniu tapicerki zaleca się regularne odkurzanie
              i szybkie usuwanie świeżych plam. Warto również rozważyć
              impregnację tapicerki, która stworzy warstwę ochronną przed
              wnikaniem brudu i wilgoci, ułatwiając dalszą pielęgnację.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
