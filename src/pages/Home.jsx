import React from "react";
import Hero from "../components/Hero/Hero";
import RoomShowcase from "../components/RoomShowcase/RoomShowcase";
import KegelAlleys from "../components/KegelAlleys/KegelAlleys";
import Contact from "../components/Contact/Contact";
import Offerings from "../components/Offerings/Offerings";
import TopBar from "../components/TopBar/TopBar";
import AlternatingSections from "../components/AlternatingSections/AlternatingSections";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <KegelAlleys />
      <AlternatingSections />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
