import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../app/oferta/[slug]/page.module.scss";

export const meta = {
  title:
    "Korekta Lakieru w Opolu – Usuwanie Rys i Hologramów | MK Studio Auto Detailing",
  hero: "/logo-mkstudio-auto-detailing-opole.jpg",
  heroAltText:
    "Logo MK Studio Auto Detailing. Profesjonalna korekta lakieru w Opolu.",
  lead: "Oferuję profesjonalną jedno- i wieloetapową korektę lakieru w Opolu. Skutecznie usuwam rysy, hologramy i zmatowienia, przywracając karoserii idealną gładkość i głębię koloru. Zabezpiecz swój lakier na lata z MK Studio Auto Detailing.",
  slug: "korekta-lakieru",
};

export default function KorektaLakieruPage() {
  return (
    <>
      <section className={classes.contentSection}>
        <div className={classes.circleContainer1}></div>
        <div className={classes.circleContainer2}></div>
        <div className={classes.circleContainer3}></div>
        <div className={classes.circleContainer4}></div>

        <div className={classes.contentSection__text}>
          <h2>Profesjonalna Korekta Lakieru – Od Rys do Lustra</h2>
          <p>
            <Link href="/blog/korekta-lakieru-opole">Korekta lakieru</Link> to
            serce auto detailingu, proces, który przywraca karoserii samochodu
            jej pierwotny blask i gładkość. W MK Studio w Opolu, precyzyjnie
            usuwam wszelkie niedoskonałości lakiernicze, od drobnych zarysowań
            po głębokie rysy i nieestetyczne hologramy. Efektem jest idealnie
            lśniąca powierzchnia, gotowa na długotrwałe zabezpieczenie.
          </p>
          <h3>Rodzaje Korekty Lakieru, które Oferuję:</h3>
          <ul>
            <li>
              <strong>Jednoetapowa Korekta Lakieru (One-Step):</strong> Jest
              idealna dla lakierów w dobrym stanie, wymagających odświeżenia i
              usunięcia delikatnych zarysowań czy zmatowień. Skutecznie
              poprawiam wygląd lakieru, nadając mu większą głębię i blask w
              krótszym czasie.
            </li>
            <li>
              <strong>
                Wieloetapowa Korekta Lakieru (Dwustopniowa/Trójstopniowa):
              </strong>{" "}
              To kompleksowy proces, który pozwala usunąć od 80% do nawet 95%
              rys i defektów lakieru. Obejmuje kilka etapów polerowania z
              użyciem różnych past i padów, co pozwala na stopniowe wykończenie
              powierzchni do perfekcji. Efektem jest idealna gładkość i efekt
              &bdquo;lustra&rdquo;.
            </li>
            <li>
              <strong>Przygotowanie Lakieru pod Powłokę Ochronną:</strong> Każda
              korekta lakieru w MK Studio jest kluczowym etapem przed aplikacją
              powłoki ceramicznej lub woskowej. Czysty, pozbawiony defektów
              lakier zapewnia maksymalną trwałość i przyleganie zabezpieczenia.
            </li>
            <li>
              <strong>Detailingowe Mycie i Dekontaminacja:</strong> Przed każdą
              korektą lakieru, samochód przechodzi przez szczegółowy proces
              mycia detailingowego i dekontaminacji. Usuwam wszelkie
              zanieczyszczenia, smołę, naloty metaliczne i żywicę, aby zapewnić
              idealnie czystą powierzchnię do pracy.
            </li>
          </ul>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/galeria-korekta-lakieru-2.jpg"
            alt="Profesjonalna jednoetapowa korekta lakieru samochodowego"
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
          <h2>Dlaczego Warto Wybrać Korektę Lakieru w Moim Studio w Opolu?</h2>
          <p>
            Perfekcyjny lakier to wizytówka każdego samochodu. W MK Studio Auto
            Detailing, dzięki wieloletniemu doświadczeniu i precyzyjnemu
            podejściu, gwarantuję efekty, które przerosną Twoje oczekiwania.
          </p>
          <ul>
            <li>
              <strong>Wieloletnie Doświadczenie:</strong> Posiadam ponad 10 lat
              praktyki w detailingu, specjalizując się w{" "}
              <Link href="/blog/korekta-lakieru-opole">korekcie lakieru</Link>.
              Każdy projekt to dla mnie wyzwanie i dowód na to, co można
              osiągnąć dzięki pasji i precyzji.
            </li>
            <li>
              <strong>Specjalistyczny Sprzęt i Kosmetyki:</strong> Używam
              wyłącznie profesjonalnych maszyn polerskich, padów i past
              najwyższej jakości (np. Menzerna, Koch-Chemie, Rupes), co zapewnia
              bezpieczeństwo lakieru i spektakularne efekty bez hologramów.
            </li>
            <li>
              <strong>Osobiste Wykonanie Przeze Mnie:</strong> Cały proces
              korekty lakieru wykonuję osobiście – jako Kamil, właściciel MK
              Studio. Masz pewność, że Twoje auto jest w rękach doświadczonego
              eksperta, który dba o każdy, nawet najmniejszy detal.
            </li>
            <li>
              <strong>Indywidualna Ocena Stanu Lakieru:</strong> Przed
              przystąpieniem do pracy, dokładnie oceniam stan lakieru i dobieram
              optymalną metodę korekty, dostosowaną do jego specyfiki i Twoich
              oczekiwań.
            </li>
            <li>
              <strong>Gwarancja Satysfakcji:</strong> Moim priorytetem jest
              Twoje pełne zadowolenie z efektów. Działam z pasją i precyzją, aby
              każdy klient opuścił MK Studio z uśmiechem na twarzy.
            </li>
          </ul>

          <blockquote className={classes.blockquote}>
            <p>
              &bdquo;Polecam. Skorzystałem z pania tapicerki samochodowej i
              polerowanie lakieru wraz z nałożeniem powłoki ceramicznej.
              Polecam!.&rdquo;
            </p>
            <footer>
              &mdash; <cite>DrKatushimero , Opole</cite>
            </footer>
          </blockquote>

          <h3>Osobiste zaangażowanie – gwarancja perfekcji</h3>
          <div>
            <p className={classes.contentSection__textP}>
              Jako <strong>Kamil</strong>, właściciel MK Studio Auto Detailing,
              osobiście nadzoruję i wykonuję każdą korektę lakieru. Moim celem
              jest nie tylko usunięcie defektów, ale także zapewnienie
              długotrwałego efektu i pełnej satysfakcji klienta.
            </p>
            <p className={classes.contentSection__textP}>
              Zaufaj mojemu doświadczeniu i pasji do perfekcji, a Twój samochód
              odzyka swój salonowy blask i będzie chroniony na lata.
            </p>
          </div>
        </div>
        <div className={classes.contentSection__image}>
          <Image
            src="/galeria-korekta-lakieru-3.jpg"
            alt="Kamil z MK Studio Auto Detailing podczas korekty lakieru"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section className={classes.callToActionSection}>
        <h2>Moje Realizacje Korekty Lakieru</h2>
        <p>
          Przeglądnij galerię zdjęć z moich ostatnich projektów korekty lakieru,
          aby zobaczyć, jak spektakularne efekty można osiągnąć.
        </p>
        <div className={classes.buttonWrapper}>
          <a href="/galeria" className={classes.buttonPrimary}>
            Przejdź do Galerii Korekty Lakieru
          </a>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Najczęściej Zadawane Pytania o Korektę Lakieru</h2>
        <p className={classes.faqLeadText}>
          Masz pytania dotyczące procesu korekty lakieru? Poniżej znajdziesz
          odpowiedzi na najczęściej zadawane pytania.
        </p>

        <div className={classes.faqListWrapper}>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czym różni się jednoetapowa korekta od wieloetapowej?
            </summary>
            <p className={classes.faqAnswer}>
              Jednoetapowa korekta (One-Step) skupia się na odświeżeniu lakieru
              i usunięciu lekkich defektów (ok. 50-70% rys). Wieloetapowa
              korekta to bardziej zaawansowany proces, usuwający od 80% do 95%
              rys i hologramów, dający efekt idealnego &bdquo;lustra&rdquo; i
              głębokiej czerni. Jest bardziej czasochłonna i precyzyjna.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy korekta lakieru jest bezpieczna dla mojego samochodu?
            </summary>
            <p className={classes.faqAnswer}>
              Tak, profesjonalnie wykonana korekta lakieru jest całkowicie
              bezpieczna. Używam specjalistycznych mierników grubości lakieru,
              aby precyzyjnie kontrolować proces polerowania i nie naruszyć
              struktury powłoki lakierniczej.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Ile czasu trwa korekta lakieru?
            </summary>
            <p className={classes.faqAnswer}>
              Czas korekty lakieru zależy od stanu początkowego lakieru oraz
              wybranego pakietu. Jednoetapowa korekta może zająć od 1 do 2 dni,
              natomiast kompleksowa, wieloetapowa korekta od 2 do nawet 4 dni.
              Dokładny czas ustalam po szczegółowej inspekcji pojazdu.
            </p>
          </details>
          <details className={classes.faqItem}>
            <summary className={classes.faqSummary}>
              Czy po korekcie lakieru muszę zastosować jakieś zabezpieczenie?
            </summary>
            <p className={classes.faqAnswer}>
              Zdecydowanie tak. Po usunięciu defektów lakier jest "goły" i
              wymaga zabezpieczenia. Zawsze zalecam aplikację powłoki
              ceramicznej lub wosku, aby chronić lakier przed nowymi
              uszkodzeniami, promieniami UV, brudem drogowym i ułatwić jego
              późniejsze mycie.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
