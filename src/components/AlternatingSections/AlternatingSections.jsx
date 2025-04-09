import React from "react";
import styles from "./AlternatingSections.module.scss";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "Live-Fußball & Genuss",
    text: "Live-Musik, die bewegt - Soul, Funk & Jazz-Abende Tauche ein in die Welt der Musik! Bei unseren Live-Events bringen talentierte Künstler die Bühne zum Leben. Von mitreißenden Soul-Klängen über groovige Funk-Beats bis hin zu entspannenden Jazz-Melodien - hier wird jeder Abend zu einem unvergesslichen Erlebnis.",
    image: "/assets/alternatingSections/image1.webp",
    alt: "Live-Fußball & Genuss",
  },
  {
    title: "Mitten im Geschehen!",
    text: "Ergänzt wird das Erlebnis durch regelmäßige Live-Musik, die den Puls der Nacht einfängt. Ob nach Feierabend, zum Feiern oder einfach, um den Moment zu genießen - du bist hier genau richtig.",
    image: "/assets/alternatingSections/wide3.webp",
    alt: "Live Musik in der Bar",
  },
  // You can add more sections here
];

const AlternatingSections = () => {
  return (
    <>
      <Helmet>
        <title>Goldener Kegel</title>
        <meta
          name="description"
          content="Erfahre mehr über den Goldenen Kegel – deine gemütliche Bar mit Live Musik und einzigartigen Drinks."
        />
      </Helmet>

      <section className={styles.container}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${styles.section} ${
              index % 2 === 0 ? styles.normal : styles.reversed
            }`}
          >
            <div className={styles.imageWrapper}>
              <img src={section.image} alt={section.alt} />
            </div>
            <div className={styles.textWrapper}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AlternatingSections;
