import Image from "next/image";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title:
    "Auto Detailing w Opolu – Kompleksowa Metamorfoza Auta | MK Studio Detailing",
  hero: "/logo2.jpg",

  lead: "Oferuję profesjonalny auto detailing w Opolu – od precyzyjnej dekontaminacji lakieru i wieloetapowej korekty, po impregnację powłoką ceramiczną i ozonowanie wnętrza. Przywracam samochodom salonowy blask i długotrwałą ochronę. Zaufaj 10-letniemu doświadczeniu Kamilowi z  MK Studio.",
  slug: "auto-detailing",
};

export default function AutoDetailingPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>
        <div className={classes.contentSection__text}>
          <h2>Kompleksowy Auto Detailing – Co Wchodzi w Skład Usługi?</h2>
          <p>
            W MK Studio każdy projekt auto detailingu to precyzyjna praca,
            mająca na celu przywrócenie Twojemu samochodowi nieskazitelnego
            wyglądu i zapewnienie mu długotrwałej ochrony. Nasze usługi to coś
            więcej niż zwykłe mycie – to prawdziwa metamorfoza, która obejmuje
            każdy element pojazdu, zarówno z zewnątrz, jak i wewnątrz.
          </p>
          <h3>Nasze Kluczowe Etapy Detailingu:</h3>
          <ul>
            <li>
              <strong>Mycie Detailingowe i Dekontaminacja Lakieru:</strong>{" "}
              Usuwamy wszelkie zanieczyszczenia z powierzchni lakieru, takie jak
              smoła, naloty metaliczne, żywica, które są niewidoczne gołym
              okiem, ale niszczą strukturę lakieru. To podstawa do dalszych
              prac.
            </li>
            <li>
              <strong>Jednokrokowa lub Wieloetapowa Korekta Lakieru:</strong>{" "}
              Usuwamy rysy, hologramy i zmatowienia, przywracając lakierowi
              głębię koloru i idealną gładkość. Korekta wieloetapowa zapewnia
              efekt &bdquo;lustra&rdquo; i najwyższy stopień perfekcji.
            </li>
            <li>
              <strong>Impregnacja Powłoką Syntetyczną / Ceramiczną:</strong>{" "}
              Zabezpieczamy lakier przed szkodliwymi czynnikami zewnętrznymi,
              takimi jak promienie UV, ptasie odchody, sól drogowa i drobne
              zarysowania. Powłoka ceramiczna gwarantuje wieloletnią ochronę i
              niesamowity efekt hydrofobowy.
            </li>
            <li>
              <strong>
                Pełne Czyszczenie Wnętrza, Pranie Tapicerki, Ozonowanie:
              </strong>{" "}
              Zajmujemy się każdym detalem wnętrza – odkurzaniem, czyszczeniem
              plastików, praniem tapicerki materiałowej lub impregnacją skóry,
              aż po dezynfekujące ozonowanie, które eliminuje nieprzyjemne
              zapachy, bakterie i wirusy.
            </li>
            <li>
              <strong>Detailing Wnętrza:</strong> Precyzyjne czyszczenie
              kokpitu, elementów plastikowych, szyb, uszczelek.
            </li>
            <li>
              <strong>Detailing Kół i Opon:</strong> Gruntowne czyszczenie felg
              i opon, dressing do opon, zabezpieczenie felg.
            </li>
          </ul>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-24.jpg"
            alt="Mycie detailingowe i dekontaminacja lakieru samochodowego"
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
          <h2>Dlaczego Warto Wybrać MK Studio w Opolu?</h2>
          <p>
            Wybierając MK Studio Detailing, stawiasz na pasję, precyzję i
            niekwestionowane doświadczenie. Jesteśmy dumni z każdego auta, które
            opuszcza nasz salon, lśniące jak nowe. Co nas wyróżnia?
          </p>
          <ul>
            <li>
              <strong>Ponad 10 Lat Doświadczenia w Auto Detailingu:</strong>{" "}
              Nasze bogate doświadczenie to gwarancja najwyższej jakości usług.
              Przez dekadę doskonaliliśmy techniki i zdobywaliśmy wiedzę, aby
              zapewnić Twojemu autu najlepszą możliwą opiekę.
            </li>
            <li>
              <strong>Certyfikowane Kosmetyki Premium:</strong> Używamy
              wyłącznie sprawdzonych, profesjonalnych produktów wiodących marek
              (np. Koch-Chemie, FX Protect, Gtechniq - jeśli możesz wymienić
              konkretne). To gwarancja bezpieczeństwa dla lakieru i wnętrza
              pojazdu, oraz trwałych efektów.
            </li>
            <li>
              <strong>
                Praca Przez Właściciela – Zero Anonimowych Pracowników:
              </strong>{" "}
              Każde auto jest obsługiwane osobiście przez Kamila, właściciela MK
              Studio. To eliminuje ryzyko niedociągnięć, zapewnia spójną,
              najwyższą jakość i osobiste podejście do każdego klienta. Masz
              pewność, że Twoje auto jest w rękach eksperta.
            </li>
            <li>
              <strong>Indywidualne Podejście:</strong> Zawsze diagnozujemy stan
              pojazdu i dobieramy zakres usług indywidualnie, aby osiągnąć
              najlepsze rezultaty dopasowane do Twoich potrzeb i oczekiwań.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Z całego serca polecam Salon. Samochód zyskał blask,
              tapicerka jak nowa. Fachowość, kompetencja, czas wykonania i
              życzliwość szczerze mnie ujęły. 👍👍&rdquo;
            </p>
            <footer>
              &mdash; <cite>Andreas Krefft, Opole</cite>
            </footer>
          </blockquote>

          <h3>Usługę Wykonuje Właściciel</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Wszystkie usługi wykonuję osobiście – <strong>Kamil</strong>,
              właściciel MK Studio Detailing. Masz pewność, że Twoje auto trafia
              w ręce fachowca z pasją i doświadczeniem.
            </p>
            <p className={classes.contentSection__textP}>
              Moja wiedza i umiejętności zdobyte przez lata pracy w branży auto
              detailingu gwarantują najwyższą jakość świadczonych usług.
            </p>
          </div>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/wlasciciel-mk-studio-kamil-auto-detailing-3.jpg"
            alt="Kamil, właściciel MK Studio Detailing, podczas pracy"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Zobacz Moje Ostatnie Realizacje</h2>
        <p>
          Przekonaj się o jakości moich usług, przeglądając galerie zdjęć z
          moich dotychczasowych projektów auto detailingu.
        </p>

        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Realizacji
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        {" "}
        <h2>Najczęściej Zadawane Pytania o Auto Detailing</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące auto detailingu? Sprawdź nasze odpowiedzi na
          najczęściej zadawane pytania.
        </p>
        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Jak długo trwa usługa auto detailingu?
            </summary>
            <p className={classes.faqAnswer}>
              Czas trwania usługi auto detailingu zależy od wybranego pakietu
              oraz stanu początkowego pojazdu. Standardowa korekta lakieru z
              zabezpieczeniem może trwać od 1 do 3 dni, natomiast kompleksowy
              detailing wnętrza kilka godzin. Szczegóły ustalamy indywidualnie
              po ocenie auta.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy powłoka ceramiczna jest trwała?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalnie zaaplikowana powłoka ceramiczna jest niezwykle
              trwała i może chronić lakier samochodowy od 2 do nawet 5 lat, w
              zależności od wyboru produktu i sposobu użytkowania pojazdu.
              Zapewnia doskonałą ochronę i ułatwia bieżące mycie.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Kiedy warto zdecydować się na auto detailing?
            </summary>
            <p className={classes.faqAnswer}>
              Auto detailing jest idealny zarówno dla nowych samochodów, aby od
              razu zabezpieczyć lakier, jak i dla używanych, aby przywrócić im
              dawny blask i usunąć wszelkie niedoskonałości. To także świetna
              inwestycja przed sprzedażą pojazdu.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
