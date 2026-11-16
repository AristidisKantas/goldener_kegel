import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Impressum from "./pages/legal/Impressum";
import Datenschutz from "./pages/legal/Datenschutz";
import CookieConsent from "react-cookie-consent";
import {
  CONSENT_COOKIE,
  hasAnalyticsConsent,
  loadGoogleAnalytics,
} from "./utils/consent";

const buttonBase = {
  fontSize: "13px",
  borderRadius: "5px",
  padding: "8px 16px",
};

const App = () => {
  // Returning visitors who already consented: load Analytics again.
  useEffect(() => {
    if (hasAnalyticsConsent()) loadGoogleAnalytics();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        flipButtons
        cookieName={CONSENT_COOKIE}
        style={{ background: "#2B373B" }}
        buttonStyle={{ ...buttonBase, background: "#f5c518", color: "#000" }}
        declineButtonStyle={{ ...buttonBase, background: "#f5c518", color: "#000" }}
        expires={150}
        onAccept={loadGoogleAnalytics}
      >
        Mit Ihrer Zustimmung verwenden wir Google Analytics, um zu verstehen,
        wie unsere Website genutzt wird. Dabei werden Cookies gesetzt und Daten
        (z. B. Ihre IP-Adresse) an Google übertragen, ggf. auch in die USA. Sie
        können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ unten auf
        der Seite ändern.{" "}
        <Link to="/datenschutz" style={{ color: "#f5c518" }}>
          Datenschutzerklärung
        </Link>
      </CookieConsent>
    </>
  );
};

export default App;
