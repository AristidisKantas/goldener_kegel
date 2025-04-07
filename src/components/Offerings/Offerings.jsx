import React from "react";
import styles from "./Offerings.module.scss";
import { Helmet } from "react-helmet-async";
import {
  FaParking,
  FaSwimmingPool,
  FaWifi,
  FaUmbrellaBeach,
} from "react-icons/fa";

const offerings = [
  { icon: <FaParking />, label: "Free Parking" },
  { icon: <FaSwimmingPool />, label: "Swimming Pool" },
  { icon: <FaWifi />, label: "Free WiFi" },
  { icon: <FaUmbrellaBeach />, label: "By the Sea" },
];

const Offerings = () => {
  return (
    <>
      <Helmet>
        <title>Our Offerings | Ostria Seaside Apartments</title>
        <meta
          name="description"
          content="Discover the premium offerings of Ostria Seaside Apartments: free parking, swimming pool, WiFi and seafront access."
        />
      </Helmet>

      <section className={styles.offeringsSection} aria-labelledby="offerings-title">
        <h2 id="offerings-title" className={styles.title}>Our Offerings</h2>
        <div className={styles.offeringsGrid}>
          {offerings.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offerings;
