"use client";
import { motion } from "framer-motion";
import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/korekta-lakieru-efekt-po-zastosowaniu-lakieru-opole.jpg";
import AfterImage1 from "../../assets/image/korekta-lakieru-efekt-przed-zastosowaniem-lakieru-opole.jpg";
import BeforeImage2 from "../../assets/image/folia-ppf-reflektor-przed-zabezpieczeniem-opole.jpg";
import AfterImage2 from "../../assets/image/folia-ppf-reflektor-po-zabezpieczeniu-opole.jpg";
import BeforeImage3 from "../../assets/image/logo2.jpg";
import AfterImage3 from "../../assets/image/logo2.jpg";
import BeforeImage4 from "../../assets/image/folia-ppf-reflektor-po-zabezpieczeniu-opole.jpg";
import AfterImage4 from "../../assets/image/folia-ppf-reflektor-przed-zabezpieczeniem-opole.jpg";
import classes from "./SliderSection.module.scss";
import Link from "next/link";
import { blurUp } from "../../utils/motion";

const SliderSection = ({
  showTitle = true,
  showButton = true,
  customBgColor,
  maxImagesToShow = 3,
  additionalClass = "",
  style,
}) => {
  const images = [
    {
      beforeImage: BeforeImage1,
      afterImage: AfterImage1,
      altBefore: "Tapicerka przed praniem z widocznymi zabrudzeniami",
      altAfter: "Tapicerka po praniu z czystym i świeżym wyglądem",
    },
    {
      beforeImage: BeforeImage4,
      afterImage: AfterImage4,
      altBefore: "Stan tapicerki przed czyszczeniem – liczne plamy",
      altAfter: "Efekt czyszczenia – tapicerka jak nowa",
    },
    {
      beforeImage: BeforeImage3,
      afterImage: AfterImage3,
      altBefore: "Skórzana tapicerka przed renowacją – widoczne uszkodzenia",
      altAfter: "Skórzana tapicerka po renowacji – pełne odświeżenie",
    },
    {
      beforeImage: BeforeImage2,
      afterImage: AfterImage2,
      altBefore: "Wnętrze auta przed praniem – widoczne zabrudzenia",
      altAfter: "Wnętrze auta po praniu – świeżość i czystość",
    },
  ];

  const gridClass =
    maxImagesToShow === 4 ? classes.fiveColumnsGrid : classes.defaultGrid;

  return (
    <section
      id="galeria"
      className={
        `${classes.sliderSection}` +
        (customBgColor ? ` ${classes.customBgColor}` : "") +
        (additionalClass ? ` ${additionalClass}` : "")
      }
      style={style}
    >
      {showTitle && <h2 className={classes.titleSlide}>Moje realizacje</h2>}

      <p className={classes.sliderDescription}>
        Przesuń suwak, aby porównać efekt <strong>przed</strong> i&nbsp;
        <strong>po</strong> profesjonalnych zabiegach: ekstrakcyjnym praniu
        tapicerki, renowacji elementów skórzanych oraz jednokrokowej korekcie
        lakieru. Tak&nbsp;przywracam fabryczną świeżość, głębię koloru i wysoki
        połysk.
      </p>
      <div className={`${classes.sliderGrid} ${gridClass}`}>
        {images
          .slice(0, maxImagesToShow)
          .map(({ beforeImage, afterImage, altBefore, altAfter }, index) => (
            <motion.div
              key={index}
              variants={blurUp(index * 0.1, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <SliderTrue
                beforeImage={beforeImage}
                afterImage={afterImage}
                alt={`Zdjęcie po i przed: ${altBefore} | ${altAfter}. Usługa: Auto Detailing Opole, Pranie tapicerki, Korekta lakieru`}
              />
            </motion.div>
          ))}
      </div>
      {showButton && (
        <div className={classes.buttonContainer}>
          <Link
            href="/galeria"
            className={classes.realizationButton}
            aria-label="Zobacz realizacje MK Studio Auto Detailing w galerii"
          >
            Galeria
          </Link>
        </div>
      )}
    </section>
  );
};

export default SliderSection;
