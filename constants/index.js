import autodetailing from "../assets/image/auto-detailing-mk-studio-opole-produkty.webp";
import autodetailing2 from "../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-17.webp";
import leatherrenovation from "../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-32.webp";
import paintcorrection from "../assets/image/galeria-korekta-lakieru-1.webp";
import ppf from "../assets/image/ppf2.webp";
import ceramic from "../assets/image/galeria-powloka-ceramiczna-3.webp";
import upholstery from "../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-22.webp";
import blogPost from "../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-18.webp";
import blogPost2 from "../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-25.webp";
import blogPost3 from "../assets/image/galeria-korekta-lakieru-2.webp";
import blogPost4 from "../assets/image/ppf4.webp";
import blogPost5 from "../assets/image/galeria-powloka-ceramiczna-3.webp";

export const servicesData = [
  {
    id: "oferta/auto-detailing",
    title: "Auto Detailing",
    image: autodetailing,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Auto Detailing</strong> – wewnętrzna metamorfoza Twojego auta: ekstrakcyjne pranie tapicerki, parowe doczyszczanie zakamarków, ozonowanie dla krystalicznego powietrza i hydrofobowa impregnacja tkanin. ",
    relatedBlogPost: "/auto-detailing-opole",
    altText:
      "Zdjęcie z usługi auto detailingu wnętrza samochodu, profesjonalne czyszczenie i pranie tapicerki w Opolu.",
  },
  {
    id: "oferta/renowacja-i-czyszczenie-skor",
    title: "Renowacja i czyszczenie skór",
    image: leatherrenovation,

    description: "Sprawdź",
    gradient: "linear-gradient(rgba(90,42,42,.5), rgba(0,0,0,.5))",
    additionalInfo:
      "<strong>Renowacja i czyszczenie skór</strong> – luksusowe spa dla Twoich foteli: system <strong>Colourlock</strong> usuwa zabrudzenia, przywraca kolor, nawilża i długotrwale chroni skórę przed pękaniem.",
    relatedBlogPost: "/glebokie-pranie-tapicerki-opole",
    altText:
      "Renowacja i czyszczenie skórzanej tapicerki. Luksusowe spa dla foteli w MK Studio Opole.",
  },
  {
    id: "oferta/korekta-lakieru",
    title: "Korekta lakieru",
    image: paintcorrection,

    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Korekta lakieru</strong> w MK Studio Auto Detailing – jednokrokowa korekta polerska, która usuwa drobne zmatowienia i przywraca szklisty połysk karoserii, realizowana przez eksperta z ponad dekadą praktyki.",
    relatedBlogPost: "/korekta-lakieru-opole",
    altText:
      "Zdjęcie przedstawiające korektę lakieru, polerowanie i usuwanie zarysowań z karoserii samochodu w Opolu.",
  },
  {
    id: "oferta/folia-ppf-ochrona-lakieru",
    title: "Folia PPF",
    image: ppf,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "Profesjonalna aplikacja <strong>folii PPF</strong> w MK Studio Auto Detailing to gwarancja trwałej, nawet 10‑letniej ochrony przed zarysowaniami, odpryskami i promieniowaniem UV.",
    relatedBlogPost: "/folia-ppf-opole",
    altText:
      "Aplikacja folii PPF na lakier samochodowy. Trwała ochrona przed zarysowaniami i odpryskami w MK Studio Opole.",
  },
  {
    id: "oferta/powloka-ceramiczna",
    title: "Powłoka ceramiczna",
    image: ceramic,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "<strong>Powłoka ceramiczna</strong> łączy trwałą ochronę z estetyką: nadaje lakierowi głęboki, szklisty połysk oraz zapewnia hydrofobowe odpychanie brudu.",
    relatedBlogPost: "/powloka-ceramiczna-opole",
    altText:
      "Zdjęcie samochodu z nałożoną powłoką ceramiczną. Hydrofobowy efekt i wysoki połysk lakieru.",
  },
  {
    id: "oferta/pranie-tapicerki",
    title: "Pranie tapicerki",
    image: upholstery,
    description: "Sprawdź",
    gradient: "linear-gradient(rgba(63,59,59,.5), rgba(40,31,31,.5))",
    additionalInfo:
      "Profesjonalna usługa <strong>prania tapicerki</strong> to doskonały sposób na przywrócenie czystości i świeżości Twojej tapicerce.",
    relatedBlogPost: "/jak-zabezpieczyc-tapicerke-przed-plamami",
    altText:
      "Profesjonalne pranie tapicerki samochodowej. Wnętrze auta z czystymi fotelami i odświeżoną tapicerką.",
  },
];

export const exteriorServices = [
  {
    id: "mycie-podstawowe",
    title: "Mycie ręczne podstawowe",
    priceRange: "80 – 120 zł",
    items: [
      "Opłukanie pojazdu z pyłu i zabrudzeń",
      "Mycie ręczne szamponem",
      "Mycie podstawowe kół (opony + felgi)",
      "Płukanie nadkoli",
      "Mycie progów",
      "Suszenie",
      "Zabezpieczenie QD lub wosk syntetyczny (trwałość 1–2 miesięcy)",
    ],
  },
  {
    id: "mycie-zaawansowane",
    title: "Mycie ręczne zaawansowane",
    priceRange: "150 – 300 zł",
    items: [
      "Pakiet podstawowy + usuwanie zanieczyszczeń drogowych",
      "Dekontaminacja lakieru",
      "Powłoka na opony",
      "Powłoka hydrofobowa na szyby",
    ],
  },

  {
    id: "zabezpieczenie-lakieru",
    title: "Zabezpieczenie lakieru",
    priceRange: "150 – 1000 zł",
    items: [
      "Wszystkie zabezpieczenia wymagają zaawansowanego mycia",
      "Wosk twardy (8–12 miesięcy) – 250 zł",
      "Aqua 9H Self Healing (trwałość 2 lata) – 400–800 zł",
      "Cleantle Admire (trwałość 2 lata)",
    ],
  },
  {
    id: "korekta-lakieru",
    title: "Korekta lakieru",
    priceRange: "800 – 1200 zł",
    items: [
      "Wymaga wcześniejszego mycia i diagnostyki",
      "One Step – usunięcie do 60% rys powierzchniowych",
      "Wieloetapowa korekta – usunięcie 90–100% rys",
    ],
  },
];

export const interiorServices = [
  {
    id: "podstawowe-wnetrze",
    title: "Podstawowe czyszczenie wnętrza",
    priceRange: "100 – 150 zł",
    items: ["Odkurzanie", "Mycie plastików", "Mycie szyb wewnątrz"],
  },
  {
    id: "zaawansowane-wnetrze",
    title: "Zaawansowane czyszczenie wnętrza",
    priceRange: "200 – 300 zł",
    items: [
      "Pakiet podstawowy + dogłębne odkurzanie",
      "Mycie / szorowanie plastików",
      "Dokładne wydmuchiwanie szczelin",
      "Mycie listew, progów i szyb",
      "Pędzelkowanie kratek nawiewów",
    ],
  },
  {
    id: "pranie-tapicerki",
    title: "Pranie tapicerki samochodowej",
    priceRange: "100 – 300 zł",
    items: [
      "Pranie foteli przód i tył, boczki, kanapa",
      "Czyszczenie podłogi – 100 zł",
      "Czyszczenie podsufitki – 100 zł",
    ],
  },
  {
    id: "kompleksowe-wnetrze",
    title: "Kompleksowe sprzątanie wnętrza – pod sprzedaż",
    priceRange: "400 – 800 zł",
    items: [
      "Pakiet 1 – wnętrze: 400–500 zł (pranie + podstawowe czyszczenie)",
      "Pakiet 2 – wnętrze: 550–800 zł (pranie + zaawansowane czyszczenie)",
    ],
  },
  {
    id: "pielegnacja-skor",
    title: "Czyszczenie skór + impregnacja",
    priceRange: "300 – 400 zł",
    items: [
      "Czyszczenie skór bez impregnacji – 300 zł",
      "Czyszczenie skór z impregnacją – 400 zł",
    ],
  },
  {
    id: "uslugi-dodatkowe",
    title: "Usługi dodatkowe",
    priceRange: "80 – 200 zł",
    items: [
      "Mycie silnika – 100–150 zł",
      "Doczyszczanie kół (felgi + opony) – 200 zł",
      "Ozonowanie – 80 zł",
    ],
  },
];

export const blogPosts = [
  {
    id: 7,
    title:
      "Kompleksowe usługi auto detailingu w Opolu – od prania po korektę lakieru",
    subtitle: "AUTO DETAILING",
    date: "2025-07-16",
    description:
      "Zapewnij swojemu samochodowi kompleksową pielęgnację: pranie tapicerki, renowację skóry, korektę lakieru, aplikację folii PPF i powłoki ceramicznej. Dowiedz się, na czym polega pełny detailing.",
    link: "/auto-detailing-opole",
    image: autodetailing2,
  },
  {
    id: 1,
    title: "Jak zabezpieczyć tapicerkę samochodową przed trwałymi plamami?",
    subtitle: "OCHRONA I PIELĘGNACJA TAPICERKI",
    date: "2025-07-08",
    description:
      "Uniknij uciążliwych zabrudzeń — poznaj sprawdzone metody zabezpieczania i konserwacji tapicerki samochodowej. Dowiedz się, jak stosować impregnaty i odplamiacze, by cieszyć się czystym wnętrzem na dłużej.",
    link: "/jak-zabezpieczyc-tapicerke-przed-plamami",
    image: blogPost,
  },
  {
    id: 2,
    title:
      "Głębokie pranie tapicerki w Opolu – usuń uporczywe plamy i nieprzyjemne zapachy",
    subtitle: "PROFESJONALNE PRANIE TAPICERKI SAMOCHODOWEJ",
    date: "2025-07-01",
    description:
      "Poznaj zaawansowane metody głębokiego prania tapicerki w Opolu, które skutecznie usuwają nawet najbardziej uporczywe zabrudzenia i przywracają wnętrzu auta świeżość oraz higienę na długi czas.",
    link: "/glebokie-pranie-tapicerki-opole",
    image: upholstery,
  },
  {
    id: 3,
    title:
      "Renowacja i czyszczenie skórzanej tapicerki w Opolu – przywróć jej blask",
    subtitle: "RENOWACJA I CZYSZCZENIE SKÓRZANEJ TAPICERKI",
    date: "2025-06-28",
    description:
      "Profesjonalne zabiegi renowacyjne i czyszczące skórzaną tapicerkę samochodową – dowiedz się, jak usunąć zarysowania, odżywić skórę i przedłużyć jej żywotność.",
    link: "/renowacja-i-czyszczenie-skorzanej-tapicerki-opole",
    image: blogPost2,
  },
  {
    id: 4,
    title: "Korekta lakieru samochodowego w Opolu – usuń rysy i hologramy",
    subtitle: "KOREKTA LAKIERU",
    date: "2025-06-25",
    description:
      "Zaawansowane techniki korekty lakieru pozwolą na wygładzenie powierzchni, usunięcie rys i przywrócenie głębi koloru. Zobacz, jak przebiega proces polerowania w profesjonalnym studiu auto detailingu.",
    link: "/korekta-lakieru-opole",
    image: blogPost3,
  },

  {
    id: 5,
    title:
      "Powłoka ceramiczna samochodu w Opolu – trwała ochrona i głęboki połysk",
    subtitle: "POWŁOKA CERAMICZNA",
    date: "2025-06-09",
    description:
      "Odkryj, jak powłoka ceramiczna zwiększa odporność lakieru na zabrudzenia, promieniowanie UV i ułatwia jego mycie. Sprawdź etapy aplikacji oraz korzyści z długotrwałej ochrony.",
    link: "/powloka-ceramiczna-opole",
    image: blogPost5,
  },
  {
    id: 6,
    title: "Folia PPF w Opolu – ochrona lakieru przed uszkodzeniami",
    subtitle: "FOLIA OCHRONNA PPF",
    date: "2025-06-15",
    description:
      "Poznaj zalety folii PPF chroniącej lakier przed kamieniami, zarysowaniami i działaniem czynników atmosferycznych. Dowiedz się, jak dbać o folię i jakie są jej rodzaje.",
    link: "/folia-ppf-opole",
    image: blogPost4,
  },
];
