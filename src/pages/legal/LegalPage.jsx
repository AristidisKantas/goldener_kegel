import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./LegalPage.module.scss";

export const LegalPage = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${title} – Goldener Kegel`}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className={styles.page}>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
};

// Highlighted placeholder for information that still has to be filled in.
export const Todo = ({ children }) => (
  <mark className={styles.todo}>[BITTE ERGÄNZEN: {children}]</mark>
);
