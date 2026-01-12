import photoAutoDetailing from "../../assets/image/auto-detailing-mk-studio-opole.jpg";
import photoAutoDetailing2 from "../../assets/image/auto-detailing-mk-studio-opole-2.jpg";
import photoAutoDetailing3 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-2.jpg";
import photoLeathers1 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-12.jpg";
import photoLeathers2 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-18.jpg";
import photoLeathers3 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg";
import photoLeathers4 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-25.jpg";
import photoLeathers5 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-32.jpg";
import photoLeathers6 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-13.jpg";
import photoClean from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg";
import photoCleaning from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-22.jpg";
import photoCleaning2 from "../../assets/image/auto-detailing-mk-studio-opole-produkty.jpg";
import photoCleaning3 from "../../assets/image/wlasciciel-mk-studio-kamil-auto-detailing-26.jpg";
import photoCorrection from "../../assets/image/galeria-korekta-lakieru-1.jpg";
import photoCorrection2 from "../../assets/image/galeria-korekta-lakieru-2.jpg";
import photoCorrection3 from "../../assets/image/galeria-korekta-lakieru-3.jpg";
import photoFoilPpf from "../../assets/image/ppf4.webp";
import photoFoilPpf2 from "../../assets/image/ppf4.webp";
import photoFoilPpf3 from "../../assets/image/ppf2.jpg";
import ceramicCoatingImage from "../../assets/image/galeria-powloka-ceramiczna-1.jpg";
import ceramicCoatingImage2 from "../../assets/image/galeria-powloka-ceramiczna-2.jpg";
import ceramicCoatingImage3 from "../../assets/image/galeria-powloka-ceramiczna-3.jpg";

export const realizationsData = [
  {
    id: "auto-detailing",
    description: "Auto Detailing",
    images: [photoAutoDetailing3, photoAutoDetailing, photoAutoDetailing2],
    image: photoAutoDetailing,
    largeImage: photoAutoDetailing,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "autoDetailing",
    mobileClass: "autoDetailingMobile",
  },
  {
    id: "renowacja-i-czyszczenie-skor",
    description: "Renowacja i Czyszczenie Skór",
    images: [
      photoLeathers1,
      photoLeathers2,
      photoLeathers3,
      photoLeathers4,
      photoLeathers5,
      photoLeathers6,
    ],
    image: photoLeathers1,
    largeImage: photoLeathers1,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "renowacjaSkor",
    mobileClass: "renowacjaSkorMobile",
  },
  {
    id: "korekta-lakieru",
    description: "Korekta Lakieru",
    images: [photoCorrection, photoCorrection2, photoCorrection3],
    image: photoCorrection,
    largeImage: photoCorrection,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "korektaLakieru",
    mobileClass: "korektaLakieruMobile",
  },
  {
    id: "folia-ppf-ochrona-lakieru",
    description: "Folia PPF",
    images: [photoFoilPpf2, photoFoilPpf3],
    image: photoFoilPpf,
    largeImage: photoFoilPpf,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "foliaPPF",
    mobileClass: "foliaPPFMobile",
  },
  {
    id: "powloka-ceramiczna",
    description: "Powłoka Ceramiczna",
    images: [ceramicCoatingImage, ceramicCoatingImage2, ceramicCoatingImage3],
    image: ceramicCoatingImage,
    largeImage: ceramicCoatingImage,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "powlokaCeramiczna",
    mobileClass: "powlokaCeramicznaMobile",
  },
  {
    id: "pranie-tapicerki",
    description: "Pranie Tapicerki",
    images: [photoCleaning, photoCleaning2, photoCleaning3],
    image: photoClean,
    largeImage: photoClean,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "pranieTapicerki",
    mobileClass: "pranieTapicerkiMobile",
  },
];
