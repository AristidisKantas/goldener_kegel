import React from "react";
import { Link } from "react-router-dom";
import { LegalPage, Todo } from "./LegalPage";
import { resetConsent } from "../../utils/consent";

const linkButton = {
  background: "none",
  border: "none",
  padding: 0,
  font: "inherit",
  color: "inherit",
  textDecoration: "underline",
  cursor: "pointer",
};

const Datenschutz = () => (
  <LegalPage title="Datenschutzerklärung">
    <h2>1. Verantwortlicher</h2>
    <p>
      Verantwortlich für die Datenverarbeitung auf dieser Website ist:
      <br />
      <Todo>Vollständiger Name des Inhabers bzw. Firmenname</Todo>
      <br />
      Goldener Kegel, Balthasarstraße 53, 50670 Köln
      <br />
      Telefon: 0221 16943399 · E-Mail: goldenerkegel@gmail.com
    </p>
    <p>
      Weitere Angaben finden Sie im <Link to="/impressum">Impressum</Link>.
    </p>

    <h2>2. Hosting und Server-Logfiles</h2>
    <p>
      Diese Website wird bei der Railway Corporation (USA) gehostet. Beim Aufruf
      der Website werden automatisch technische Daten verarbeitet, die Ihr
      Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs,
      aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystemangaben.
      Dies ist erforderlich, um die Website auszuliefern und ihren sicheren
      Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
      (berechtigtes Interesse an einem stabilen und sicheren Betrieb).
    </p>
    <p>
      Dabei können Daten in die USA übermittelt werden. Die Übermittlung erfolgt
      auf Grundlage{" "}
      <Todo>
        im Railway-Konto prüfen: abgeschlossener Auftragsverarbeitungsvertrag
        (DPA) mit EU-Standardvertragsklauseln bzw. Zertifizierung nach dem
        EU-US Data Privacy Framework
      </Todo>
      .
    </p>

    <h2>3. Schriftarten</h2>
    <p>
      Alle Schriftarten werden direkt von unserem Server geladen. Es besteht
      dabei keine Verbindung zu Servern Dritter (z. B. Google Fonts).
    </p>

    <h2>4. Cookies und Einwilligung</h2>
    <p>
      Beim ersten Besuch fragen wir Sie, ob Sie der Nutzung von Google Analytics
      zustimmen. Ihre Entscheidung („akzeptiert“ oder „abgelehnt“) speichern wir
      in dem Cookie <code>goldenerKegelCookieConsent</code> für 150 Tage, damit
      wir Sie nicht bei jedem Besuch erneut fragen müssen. Dieses Cookie ist
      technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG; Art. 6 Abs. 1 lit. c
      DSGVO i. V. m. Art. 7 Abs. 1 DSGVO).
    </p>
    <p>
      Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
      widerrufen bzw. Ihre Auswahl ändern:{" "}
      <button type="button" onClick={resetConsent} style={linkButton}>
        Cookie-Einstellungen öffnen
      </button>
      . Auch über den Link „Cookie-Einstellungen“ am Ende jeder Seite ist das
      möglich.
    </p>

    <h2>5. Google Analytics</h2>
    <p>
      Nur wenn Sie eingewilligt haben, nutzen wir Google Analytics 4, einen
      Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street,
      Dublin 4, Irland („Google“). Google Analytics hilft uns zu verstehen, wie
      Besucher unsere Website nutzen (z. B. aufgerufene Seiten, Verweildauer,
      Geräte- und Browsertyp, ungefährer Standort), damit wir unser Angebot
      verbessern können.
    </p>
    <p>
      Dazu werden Cookies (<code>_ga</code>, <code>_ga_*</code>) auf Ihrem Gerät
      gespeichert, die bis zu 2 Jahre gültig sind. Ihre IP-Adresse wird von
      Google Analytics 4 nicht gespeichert. Die erhobenen Daten werden nach{" "}
      <Todo>Aufbewahrungsdauer aus Google Analytics: Verwaltung → Datenerfassung und -änderung → Datenaufbewahrung (2 oder 14 Monate)</Todo>{" "}
      gelöscht.
    </p>
    <p>
      Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO,
      § 25 Abs. 1 TDDDG). Dabei können Daten an die Google LLC in den USA
      übermittelt werden. Google LLC ist nach dem EU-US Data Privacy Framework
      zertifiziert, für die USA besteht insoweit ein Angemessenheitsbeschluss
      der EU-Kommission. Weitere Informationen:{" "}
      <a
        href="https://policies.google.com/privacy?hl=de"
        target="_blank"
        rel="noopener noreferrer"
      >
        Datenschutzerklärung von Google
      </a>
      .
    </p>

    <h2>6. Google Maps</h2>
    <p>
      Auf unserer Website können Sie eine Karte von Google Maps (Google Ireland
      Limited, siehe oben) anzeigen lassen. Die Karte wird erst geladen, wenn
      Sie auf „Karte laden“ klicken. Erst dann werden Daten wie Ihre
      IP-Adresse an Google übertragen, ggf. auch an die Google LLC in den USA
      (zertifiziert nach dem EU-US Data Privacy Framework). Google kann dabei
      Cookies setzen. Rechtsgrundlage ist Ihre Einwilligung durch den Klick
      (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
    </p>

    <h2>7. Kontakt per E-Mail oder Telefon</h2>
    <p>
      Wenn Sie uns per E-Mail oder Telefon kontaktieren, z. B. für eine
      Reservierung, verarbeiten wir Ihre Angaben (Name, Kontaktdaten, Inhalt der
      Anfrage), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1
      lit. b DSGVO, wenn die Anfrage einen Vertrag oder eine Reservierung
      betrifft, ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
      der Beantwortung von Anfragen). Wir löschen die Daten, sobald sie nicht
      mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten
      bestehen.
    </p>
    <p>
      Für E-Mails nutzen wir den Dienst Gmail der Google Ireland Limited. Dabei
      können Daten auch an die Google LLC in den USA übermittelt werden
      (zertifiziert nach dem EU-US Data Privacy Framework).
    </p>

    <h2>8. Lokale Speicherung im Browser</h2>
    <p>
      Wir speichern die gewählte Darstellungsvariante der Website (Farbschema)
      im lokalen Speicher Ihres Browsers (<code>localStorage</code>). Diese
      Information verlässt Ihr Gerät nicht und wird nicht an uns oder Dritte
      übertragen (§ 25 Abs. 2 Nr. 2 TDDDG).
    </p>

    <h2>9. Ihre Rechte</h2>
    <p>Sie haben das Recht auf:</p>
    <ul>
      <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung (Art. 17 DSGVO)</li>
      <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>
        Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO (Art. 21 DSGVO)
      </li>
      <li>
        Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft
        (Art. 7 Abs. 3 DSGVO)
      </li>
    </ul>
    <p>
      Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten. Außerdem
      haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
      beschweren (Art. 77 DSGVO). Für uns zuständig ist die Landesbeauftragte
      für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
    </p>

    <h2>10. Pflicht zur Bereitstellung, automatisierte Entscheidungen</h2>
    <p>
      Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen.
      Eine automatisierte Entscheidungsfindung einschließlich Profiling findet
      nicht statt.
    </p>

    <p>
      <em>Stand: November 2026</em>
    </p>
  </LegalPage>
);

export default Datenschutz;
