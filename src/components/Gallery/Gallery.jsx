import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from "react-helmet-async";

const images = [
  {
    src: "/assets/gallery/img1.webp",
    alt: "Kegelbahn mit Freunden",
  },
  {
    src: "/assets/gallery/img2.webp",
    alt: "Frisch gezapftes Bier auf dem Tisch",
  },
  {
    src: "/assets/gallery/img3.webp",
    alt: "Gemütliche Bar Atmosphäre",
  },
  {
    src: "/assets/gallery/img4.webp",
    alt: "Kreative Cocktailpräsentation",
  },
  {
    src: "/assets/gallery/img5.webp",
    alt: "Kegelbahn mit Freunden",
  },
  {
    src: "/assets/gallery/img6.webp",
    alt: "Frisch gezapftes Bier auf dem Tisch",
  },
  {
    src: "/assets/gallery/img7.webp",
    alt: "Gemütliche Bar Atmosphäre",
  },
  {
    src: "/assets/gallery/img8.webp",
    alt: "Kreative Cocktailpräsentation",
  },
  {
    src: "/assets/gallery/img9.webp",
    alt: "Frisch gezapftes Bier auf dem Tisch",
  },
  {
    src: "/assets/gallery/img10.webp",
    alt: "Gemütliche Bar Atmosphäre",
  },
  {
    src: "/assets/gallery/img11.webp",
    alt: "Kreative Cocktailpräsentation",
  },
];

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>Galerie - Goldener Kegel</title>
        <meta
          name="description"
          content="Erkunde unsere Galerie und erhalte Einblicke in die Stimmung und Angebote im Goldenen Kegel!"
        />
      </Helmet>

      <section className={styles.gallerySection} id="gallery">
        <h2 className={styles.heading}>Unsere Galerie</h2>
        {isMobile ? (
          <Carousel
          showThumbs={false}
          infiniteLoop
          axis="horizontal"
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          >
            {images.map((img, index) => (
              <div key={index}>
                <img loading="lazy" src={img.src} alt={img.alt} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.gridGallery}>
            {images.map((img, index) => (
              <div key={index} className={styles.gridItem}>
                <img loading="lazy" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
