"use client";
import React, { useState } from "react";
import classes from "./Contact.module.scss";
import { PhoneCall, AtSign } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.consent) {
      setMessageStatus(
        "Musisz wyrazić zgodę na przetwarzanie danych osobowych."
      );
      setShowModal(true);
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageStatus("Wiadomość wysłana pomyślnie!");
        setForm({ name: "", email: "", message: "", consent: false });
      } else {
        setMessageStatus(
          data.error || "Wystąpił błąd przy wysyłaniu wiadomości."
        );
      }
    } catch (error) {
      console.error("Błąd wysyłania: ", error);
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
    } finally {
      setShowModal(true);
      setIsSending(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setMessageStatus(null);
  };

  return (
    <>
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
            <p className={classes.contact__address}>
              Ulica: Częstochowska 44
              <br />
              Miasto: 45-020 Opole
            </p>
            <div
              className={`${classes.contact__info_row} ${classes.contact__info_phone}`}
            >
              <PhoneCall className={classes.icon} />
              <a
                href="tel:+48690570800"
                className={classes.contact__phone_link}
              >
                690 570 800
              </a>
            </div>
            <div className={classes.contact__info_row}>
              <AtSign className={classes.icon} />
              <a
                href="mailto:mkstudio.opole@gmail.com"
                className={classes.contact__email_link}
              >
                mkstudio.opole@gmail.com
              </a>
            </div>

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
                  {hours === "Zamknięte" ? (
                    <span className={classes.contact__time_closed}>
                      {hours}
                    </span>
                  ) : (
                    <span className={classes.contact__time}>{hours}</span>
                  )}
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
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez MK
                Studio Auto Detailing w celu realizacji zapytania. Dane są
                podawane dobrowolnie, jednak są niezbędne do jego przetworzenia.
                Zostałem poinformowany o przysługującym mi prawie dostępu do
                moich danych, ich poprawiania oraz żądania zaprzestania
                przetwarzania.
              </label>
              <button type="submit" disabled={isSending || !form.consent}>
                {isSending ? "Wysyłanie..." : "Wyślij"}
              </button>
            </form>
          </div>
        </div>
        <div className={classes.whiteBlockWrapper}></div>
      </section>

      {showModal && (
        <div className={classes.modal} onClick={closeModal}>
          <button className={classes.modalCloseButton} onClick={closeModal}>
            &times;
          </button>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {messageStatus && <p>{messageStatus}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
