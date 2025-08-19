"use client";
import React from "react";
import classes from "./ContactContent.module.scss";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaRegClock, FaClock, FaHourglassEnd } from "react-icons/fa";

import {
  textVariant,
  fadeIn,
  fadeScale,
  staggerContainer,
} from "../../utils/motion";

const ContactContent = () => (
  <motion.div
    className={classes.contactContent}
    variants={staggerContainer(0.2, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h1 className={classes.contactContent__h1} variants={textVariant(0)}>
      Skontaktuj się z MK Studio Auto Detailing – Opole
    </motion.h1>
    <div className={classes.contactContent__textWrapper}>
      <motion.p variants={fadeIn("up", "spring", 0.2, 0.7)}>
        Cześć! Nazywam się <span className={classes.bold}>Kamil</span>, mam
        ponad 10-letnie doświadczenie w auto detailingu i prowadzę studio{" "}
        <span className={classes.bold}>MK Studio Auto Detailing</span> w Opolu.
        Codziennie pomagam kierowcom przywracać ich samochodom świeżość – od{" "}
        <span classNameę={classes.bold}>czyszczenia tapicerki</span>, przez{" "}
        <span className={classes.bold}>korektę lakieru</span>, aż po{" "}
        <span className={classes.bold}>powłoki ceramiczne</span>.
      </motion.p>

      <motion.p variants={fadeIn("up", "spring", 0.4, 0.7)}>
        Masz pytanie? Chcesz zapytać mnie o termin, zakres usługi lub cenę?{" "}
        <span className={classes.bold}>
          Zadzwoń lub napisz – odpowiem w ciągu godziny
        </span>{" "}
        i przedstawię darmową wycenę. Kontaktujesz się bezpośrednio ze mną – bez
        pośredników, bez presji, z pełnym zaangażowaniem.
      </motion.p>

      <motion.h3 variants={textVariant(0.6)}>Dane kontaktowe</motion.h3>

      <motion.p variants={fadeIn("up", "spring", 0.8, 0.7)}>
        <span className={classes.bold}>MK Studio Auto Detailing – Opole</span>
        <br />
        <FaMapMarkerAlt className={classes.icon1} /> ul. Częstochowska 44,
        45-020 Opole
        <br />
        <FaPhone className={classes.icon} />{" "}
        <a href="tel:690570800">690 570 800</a>
        <br />
        <FaEnvelope className={classes.icon} />{" "}
        <a href="mailto:mkstudio.opole@gmail.com">mkstudio.opole@gmail.com</a>
      </motion.p>

      <motion.h3 variants={textVariant(1.0)}>Godziny otwarcia</motion.h3>

      <motion.p variants={fadeIn("up", "spring", 1.2, 0.7)}>
        <FaRegClock className={classes.icon} /> Pon.–Pt. 07:00–20:00
        <br />
        <FaClock className={classes.icon} /> Sobota 08:00–18:00
        <br />
        <FaHourglassEnd className={classes.icon} /> Niedziela: nieczynne
      </motion.p>

      <motion.p variants={fadeIn("up", "spring", 1.4, 0.7)}>
        💬 Wycena jest{" "}
        <span className={classes.bold}>bezpłatna i niezobowiązująca</span> –
        możesz też do mnie napisać poprzez formularz kontaktowy. Twoje dane są
        bezpieczne – szanuję prywatność moich klientów.
      </motion.p>

      <motion.h3 variants={textVariant(1.6)}>
        Znajdziesz mnie również tutaj:
      </motion.h3>

      <motion.ul className={classes.socialList} variants={fadeScale(1.8, 0.7)}>
        <li>
          <a
            href="https://www.facebook.com/mkstudioautokosmetyka"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </li>
      </motion.ul>
    </div>
  </motion.div>
);

export default ContactContent;
