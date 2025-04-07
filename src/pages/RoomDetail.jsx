import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms';
import styles from './RoomDetail.module.scss';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useIsMobile } from '../hooks/useIsMobile';

// ✅ New Lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!room) return <p>Room not found</p>;
  if (!room.images || room.images.length === 0) return <p>No images for this room.</p>;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsOpen(true);
  };

  const slides = room.images.map((src) => ({ src }));

  return (
    <>
      <Helmet>
        <title>{room.name} | Ostria Seaside Apartments</title>
        <meta name="description" content={room.description} />
      </Helmet>

      <div className={styles.roomDetail}>
        {isMobile ? (
          <Carousel showThumbs={false} infiniteLoop>
            {room.images.map((img, index) => (
              <div key={index} onClick={() => openLightbox(index)}>
                <img src={img} alt={`${room.name} ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.gallery}>
            {room.images.map((img, index) => (
              <LazyLoadImage
                key={index}
                src={img}
                alt={`${room.name} ${index + 1}`}
                effect="blur"
                className={styles.galleryImage}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        )}

        <div className={styles.content}>
          <h1>{room.name}</h1>
          <p className={styles.short}>{room.description}</p>
          <p className={styles.long}>{room.longDescription}</p>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
};

export default RoomDetail;
