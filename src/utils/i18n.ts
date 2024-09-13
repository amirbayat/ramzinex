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
          header: {
            search: {
              placeholder: "Search market",
            },
          },
          sort: {
            name: "name",
            latest_price: "price",
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
          header: {
            search: {
              placeholder: "جستجو بازار",
            },
          },
          sort: {
            name: "نام",
            latest_price: "آخرین قیمت",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
