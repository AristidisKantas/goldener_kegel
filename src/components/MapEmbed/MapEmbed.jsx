import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MapEmbed.module.scss";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4158877670657!2d6.95380671324105!3d50.95301457157448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2598ed287939%3A0xa7c9f1886a36d1f9!2sBalthasarstra%C3%9Fe%2053%2C%2050670%20K%C3%B6ln%2C%20Germany!5e0!3m2!1sen!2sgr!4v1728908727961!5m2!1sen!2sgr";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Balthasarstra%C3%9Fe%2053%2C%2050670%20K%C3%B6ln";

// Google Maps is only loaded after the visitor clicks, so no data goes to Google before that.
const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Google Maps: Standort Goldener Kegel"
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className={styles.placeholder}>
      <p>
        Beim Laden der Karte werden Daten (z. B. Ihre IP-Adresse) an Google
        übertragen. Mehr dazu in unserer{" "}
        <Link to="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <button type="button" onClick={() => setLoaded(true)}>
        Karte laden
      </button>
      <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
        In Google Maps öffnen
      </a>
    </div>
  );
};

export default MapEmbed;
