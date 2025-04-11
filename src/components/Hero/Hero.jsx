import React from "react";
import styles from "./Hero.module.scss";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Goldenen Kegel</title>
        <meta name="description" content="Willkommen beim Goldenen Kegel!" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1>Willkommen beim Goldenen Kegel!</h1>
          <p>
            Tauche ein in die gemütliche Atmosphäre unserer Bar, wo klassische
            Pub-Vibes auf modernen Charme treffen. Genieße die besten Whiskeys,
            frisch gezapfte Biere und erfrischende Gin Tonics - verfeinert mit
            einer Vielfalt an handverlesenen Botanicals. Unsere saisonalen
            Cocktails bringen zu jeder Jahreszeit das gewisse Etwas ins Glas.
          </p>
          <div className={styles.buttons}>
          <a href="#kegel-alleys" className={styles.cta}>
            Jetzt buchen
          </a>
          <a
            href="/gk_menu.pdf"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
