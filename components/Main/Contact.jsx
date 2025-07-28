"use client";
import React, { useState } from "react";
import classes from "./Contact.module.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert("Proszę wyrazić zgodę na przetwarzanie danych.");
      return;
    }
    console.log("Form data:", form);
    alert("Dziękujemy! Twoja wiadomość została wysłana.");
    setForm({ name: "", email: "", message: "", consent: false });
  };

  return (
    <section className={classes.contact}>
      <div className={classes.contact__container}>
        <div className={classes.contact__info}>
          <h2>Kontakt</h2>
          <p>
            <strong>
              MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru
            </strong>
            <br />
            Auto Detailing Opole
            <br />
            Opole
          </p>
          <p>
            Ulica: Częstochowska 44
            <br />
            Miasto: 45-020 Opole
          </p>
          <p>
            📞 <a href="tel:+48690570800">690 570 800</a>
            <br />
            ✉️{" "}
            <a href="mailto:mkstudio.opole@gmail.com">
              mkstudio.opole@gmail.com
            </a>
          </p>

          <hr className={classes.contact__divider} />

          <h3>Godziny otwarcia:</h3>
          <ul className={classes.contact__hours}>
            {[
              ["Poniedziałek", "07:00–20:00"],
              ["Wtorek", "07:00–20:00"],
              ["Środa", "07:00–20:00"],
              ["Czwartek", "07:00–20:00"],
              ["Piątek", "07:00–20:00"],
              ["Sobota", "08:00–18:00"],
              ["Niedziela", "Zamknięte"],
            ].map(([day, hours]) => (
              <li key={day}>
                <span className={classes.contact__day}>{day}:</span>
                <span className={classes.contact__time}>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.contact__separator} />

        <div className={classes.contact__form}>
          <h2>Wyślij mi wiadomość</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Twoje imię"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Twój email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Twoja wiadomość"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
            <label className={classes.contact__checkbox}>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              Wyrażam zgodę na przetwarzanie danych osobowych...
            </label>
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
      <div className={classes.whiteBlockWrapper}></div>
    </section>
  );
};

export default Contact;
