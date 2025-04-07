import React from "react";
import Hero from "../components/Hero/Hero";
import RoomShowcase from "../components/RoomShowcase/RoomShowcase";
import Contact from '../components/Contact/Contact';
import Offerings from '../components/Offerings/Offerings';
import TopBar from "../components/TopBar/TopBar";

const Home = () => {
  return (
    <>
      <Hero />
      <RoomShowcase />
      <Offerings />
      <Contact />
    </>
  );
};

export default Home;
