import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { engLocale } from "./locales/Eng";
import { rusLocale } from "./locales/Rus";
import { uzbLocale } from "./locales/Uzb";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: engLocale
  },
  ru: {
    translation: rusLocale
  },
  uz: {
    translation: uzbLocale
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    fallbackLng: ["uz", "ru", "en"]
  });

  export default i18n;