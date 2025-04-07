import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import RoomDetail from "./pages/RoomDetail";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
      </Routes>
    </>
  );
};

export default App;
