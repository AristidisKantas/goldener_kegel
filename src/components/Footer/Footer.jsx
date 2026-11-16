import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { resetConsent } from "../../utils/consent";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Rechtliches">
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <button type="button" onClick={resetConsent} className={styles.linkButton}>
          Cookie-Einstellungen
        </button>
      </nav>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Goldener Kegel · Balthasarstraße 53, 50670 Köln
      </p>
    </footer>
  );
};

export default Footer;
