import {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";

export const CONSENT_COOKIE = "goldenerKegelCookieConsent";
export const GA_ID = "G-TECV3FDC3Q";

export function hasAnalyticsConsent() {
  return getCookieConsentValue(CONSENT_COOKIE) === "true";
}

// Loads Google Analytics. Must only be called after the visitor has consented.
export function loadGoogleAnalytics() {
  window[`ga-disable-${GA_ID}`] = false;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function deleteAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = domain
          ? `${name}=; ${expired}; domain=${domain}`
          : `${name}=; ${expired}`;
      });
    });
}

// Withdraws consent: stops Analytics, removes its cookies and shows the banner again.
export function resetConsent() {
  window[`ga-disable-${GA_ID}`] = true;
  resetCookieConsentValue(CONSENT_COOKIE);
  deleteAnalyticsCookies();
  window.location.reload();
}
