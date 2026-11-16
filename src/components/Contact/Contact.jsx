import React from "react";
import styles from "./Contact.module.scss";
import { Helmet } from "react-helmet-async";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MapEmbed from "../MapEmbed/MapEmbed";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Goldener Kegel</title>
        <meta name="description" content="Get in touch with Goldener Kegel." />
      </Helmet>

      <section className={styles.contactSection} id="contact">
        <h2>Kontaktieren Sie uns</h2>

        <div className={styles.grid}>
          <div className={styles.details}>
            <div className={styles.infoStyle}>
              <FaEnvelope className={styles.iconStyle} />
              <span>goldenerkegel@gmail.com</span>
            </div>
            <div className={styles.infoStyle}>
              <FaPhone className={styles.iconStyle} />
              <span>0221 16943399</span>
            </div>
            <div className={styles.infoStyle}>
              <FaInstagram className={styles.iconStyle} />
              <span>@goldener_kegel</span>
            </div>
            <div className={styles.infoStyle}>
              <FaMapMarkerAlt className={styles.iconStyle} />
              <span>Balthasarstraße 53, Köln, 50670</span>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
