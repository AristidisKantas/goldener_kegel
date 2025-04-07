import React from "react";
import styles from "./RoomShowcase.module.scss";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Elegant suite with ocean view and king-size bed.",
    image: "/assets/rooms/room1.jpg",
  },
  {
    id: 2,
    name: "Standard Room",
    description: "Cozy room with modern decor and queen bed.",
    image: "/assets/rooms/room2.jpg",
  },
  {
    id: 3,
    name: "Family Apartment",
    description: "Spacious apartment with 2 bedrooms and kitchenette.",
    image: "/assets/rooms/room3.jpg",
  },
];

const RoomShowcase = () => {
  return (
    <>
      <Helmet>
        <title>Ostria Seaside Apartments</title>
        <meta
          name="description"
          content="Explore our luxurious and comfortable hotel rooms. Book your dream vacation with Ostria Seaside Apartments."
        />
      </Helmet>

      <section className={styles.roomsSection} id="rooms">
        <h2>Our Rooms</h2>
        <div className={styles.grid}>
          {rooms.map((room) => (
            <Link
              to={`/rooms/${room.id}`}
              key={room.id}
              className={styles.card}
            >
              <LazyLoadImage
                src={room.image}
                alt={room.name}
                effect="blur"
                className={styles.roomImage}
              />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default RoomShowcase;
