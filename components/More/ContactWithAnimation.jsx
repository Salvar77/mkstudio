"use client";
import React from "react";
import { motion } from "framer-motion";
import Contact from "../Main/Contact";
import classes from "../../app/kontakt/page.module.scss";

const ContactWithAnimation = () => {
  return (
    <motion.div
      className={classes.contact__box}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactWithAnimation;
