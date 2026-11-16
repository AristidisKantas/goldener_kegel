import React from "react";
import { LegalPage, Todo } from "./LegalPage";

const Impressum = () => (
  <LegalPage title="Impressum">
    <h2>Angaben gemäß § 5 DDG</h2>
    <p>
      Goldener Kegel
      <br />
      <Todo>Vollständiger Name des Inhabers bzw. Firmenname mit Rechtsform</Todo>
      <br />
      Balthasarstraße 53
      <br />
      50670 Köln
      <br />
      Deutschland
    </p>
    <p>
      <Todo>Nur bei GmbH/UG o. Ä.: „Vertreten durch: Name des Geschäftsführers“ – sonst diese Zeile löschen</Todo>
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: <a href="tel:+4922116943399">0221 16943399</a>
      <br />
      E-Mail: <a href="mailto:goldenerkegel@gmail.com">goldenerkegel@gmail.com</a>
    </p>

    <h2>Registereintrag</h2>
    <p>
      <Todo>Falls im Handelsregister eingetragen: Registergericht und Registernummer – sonst diesen Abschnitt löschen</Todo>
    </p>

    <h2>Umsatzsteuer-ID</h2>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:{" "}
      <Todo>USt-IdNr., falls vorhanden – sonst diesen Abschnitt löschen</Todo>
    </p>

    <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
    <p>
      <Todo>Name</Todo>
      <br />
      Balthasarstraße 53, 50670 Köln
    </p>

    <h2>Verbraucherstreitbeilegung</h2>
    <p>
      Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
      vor einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>
  </LegalPage>
);

export default Impressum;
