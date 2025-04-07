import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <span className={styles.logoText}>Goldener Kegel</span>
        </a>
      </div>

      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation menu */}
      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </Link>
        <a href="/#rooms" onClick={closeMenu}>
          Book Now
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
