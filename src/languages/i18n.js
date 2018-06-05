import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import XHR from "i18next-xhr-backend";

function parseDataI18nServer(data) {
  return JSON.parse(data).data.keywords;
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    backend: {
      loadPath:
        "http://keetool1.xyz/api/v1/language?encode={{lng}}&version=123",
      // allow cross domain requests
      crossDomain: true,
      parse: parseDataI18nServer
    },
    wait: true,
    lowerCaseLng: true,
    // lng: localStorage.getItem("i18nextLng"),
    // nonExplicitWhitelist: "",
    fallbackLng: false, // false = disable load dev language
    load: "languageOnly", // only load  'languageOnly' --> 'en'
    debug: true,
    detection: {
      lookupQuerystring: "lang"
      //   order: ["querystring", "localStorage", "cookie"]
    },
    keySeparator: false,

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    }
  });

export default i18n;
