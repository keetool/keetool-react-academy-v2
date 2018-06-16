import { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import XHR from "i18next-xhr-backend";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { i18nApi } from "../apis/i18nApis";
import { capitalizeFirstLetter } from "../helpers/utility";

let keyLanguage;
let keyVersionLanguage;

function parseDataI18nServer(data) {
  if (data) {
    const result = data.data;

    localStorage.setItem(keyVersionLanguage, result.version);
    result.keywords = {
      ...result.keywords,
      i18nStamp: Date.now()
    };
    localStorage.setItem(keyLanguage, JSON.stringify(result.keywords));

    return result.keywords;
  }
  return null;
}

function loadLocales(lang, options, callback) {
  keyLanguage = `keetool_i18n_res_${lang}-translation`;
  keyVersionLanguage = `keetool_i18n_version_${lang}`;

  const versionLang = localStorage.getItem(keyVersionLanguage);
  i18nApi(lang, versionLang)
    .then(res => {
      const result = res.data;
      callback(result, { status: "200" });
    })
    .catch(() => {
      callback(null, { status: "404" });
    });
}

const i18n = use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    backend: {
      backends: [
        XHR, // primary
        LocalStorageBackend // fallback,
      ],
      backendOptions: [
        {
          loadPath: "{{lng}}",
          // allow cross domain requests
          crossDomain: true,
          parse: parseDataI18nServer,
          ajax: loadLocales
        },
        {
          prefix: "keetool_i18n_res_",
          // expiration
          expirationTime: 10000 * 24 * 60 * 60 * 1000
        }
      ]
    },
    wait: true,
    lowerCaseLng: true,
    fallbackLng: false, // false = disable load dev language
    load: "languageOnly", // only load  'languageOnly' --> 'en'
    // debug: true,
    detection: {
      lookupQuerystring: "lang",
      lookupLocalStorage: "keetool_i18n_lang"
    },
    keySeparator: false,

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    },
    interpolation: {
      format: function(value, format) {
        console.log(value);
        if (format === "uppercase") return value.toUpperCase();
        if (format === "lowercase") return value.toLowerCase();
        return capitalizeFirstLetter(value);
      }
    }
  });

export default i18n;
