import React from "react";
import styles from "./KegelAlleys.module.scss";
import { Helmet } from "react-helmet-async";

const KegelAlleys = () => {
  return (
    <>
      <Helmet>
        <title>Goldenen Kegel</title>
        <meta
          name="description"
          content="Entdecke unsere stilvollen Kegelbahnen im Goldenen Kegel - der perfekte Ort für Spaß, Spiel und Geselligkeit. Jetzt reservieren unter +49 123 456789!"
        />
      </Helmet>

      <section className={styles.kegelSection} id="kegel-alleys">
        <div className={styles.textContent}>
          <div className={styles.headingWithLogo}>
            <img
              src="/assets/logo/logo_dark.png"
              alt="Goldenen Kegel Logo"
              className={styles.logo}
            />
            <h2>Wo Spaß und Genuss aufeinandertreffen</h2>
          </div>
          <p>
            Unser Name ist Programm: Im Goldenen Kegel erwarten dich nicht nur
            erstklassige Getränke und eine entspannte Atmosphäre, sondern auch
            zwei Kegelbahnen, die für Spiel und Spaß sorgen.
          </p>
          <p className={styles.phone}>
            📞 Jetzt reservieren: <a href="tel:0221 16943399">0221 16943399</a>
          </p>
          <p>
            Egal ob mit Freunden, Familie oder Kollegen - ein Abend auf der
            Kegelbahn ist immer ein Volltreffer. Kombiniere das Kegeln mit einem
            frisch gezapften Bier, einem unserer kreativen Cocktails oder einer
            Runde Gin Tonics mit besonderen Botanicals.
          </p>
          <p>
            Hier trifft Geselligkeit auf gute Unterhaltung - willkommen im
            Goldenen Kegel!
          </p>
        </div>

        <div className={styles.gallery}>
          <img
            src="/assets/kegelalleys/image1.webp"
            alt="Moderne Kegelbahn im Pub"
          />
          <img
            src="/assets/kegelalleys/image1.webp"
            alt="Kegelbahn mit Beleuchtung"
          />
          <img
            src="/assets/kegelalleys/image1.webp"
            alt="Gemütlicher Kegelbereich mit Bar"
          />
        </div>
      </section>
    </>
  );
};

export default KegelAlleys;
