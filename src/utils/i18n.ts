import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      common: {
        loading: "loading...",
      },
      market: {
        list: {
          item: {
            name: "{} ({})",
            currency: "IRR",
          },
        },
      },
    },
  },
  fa: {
    translation: {
      common: {
        loading: "در حال بارگزاری...",
      },
      market: {
        list: {
          item: {
            name: "{} ({})",
            currency: "IRR",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
