import React from "react";
import styles from "./Contact.module.scss";
import { Helmet } from "react-helmet-async";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Goldener Kegel</title>
        <meta name="description" content="Get in touch with Goldener Kegel." />
      </Helmet>

      <section className={styles.contactSection} id="contact">
        <h2>Contact Us</h2>

        <div className={styles.grid}>
          <div className={styles.details}>
            <h3>Goldener Kegel</h3>
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
            <iframe
              title="Google Maps Location of Goldener Kegel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4158877670657!2d6.95380671324105!3d50.95301457157448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2598ed287939%3A0xa7c9f1886a36d1f9!2sBalthasarstra%C3%9Fe%2053%2C%2050670%20K%C3%B6ln%2C%20Germany!5e0!3m2!1sen!2sgr!4v1728908727961!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
