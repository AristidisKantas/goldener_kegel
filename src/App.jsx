import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import RoomDetail from "./pages/RoomDetail";
import TopBar from "./components/TopBar/TopBar";
import CookieConsent from "react-cookie-consent";

function loadGoogleAnalytics() {
  // Inject GA script only once
  if (!window.gtag) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TECV3FDC3Q";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", "G-TECV3FDC3Q", {
        anonymize_ip: true, // Important for GDPR!
      });
    };
  }
}

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        cookieName="goldenerKegelCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "#f5c518",
          color: "#000",
          fontSize: "13px",
          borderRadius: "5px",
        }}
        declineButtonStyle={{
          background: "#999",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "5px",
        }}
        expires={150}
        onAccept={() => {
          // Here you can load Google Analytics if accepted
          console.log("Cookies accepted");
          loadGoogleAnalytics();
        }}
        onDecline={() => {
          console.log("Cookies declined");
        }}
      >
        Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.{" "}
        <a href="/datenschutz" style={{ color: "#f5c518" }}>
          Mehr erfahren
        </a>
      </CookieConsent>    
    </>
  );
};

export default App;
