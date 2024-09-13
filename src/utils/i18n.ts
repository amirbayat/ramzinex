import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      common: {
        loading: "loading...",
        back: "back",
        en: "en",
        fa: "fa",
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
        detail: {
          title: "{} ({})",
          en_name: "english name",
          price: "price",
          hour_24_changes: "24 hour changes",
        },
      },
    },
  },
  fa: {
    translation: {
      common: {
        loading: "در حال بارگزاری...",
        back: "بازگشت",
        en: "en",
        fa: "فا",
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
        detail: {
          title: "{} ({})",
          en_name: "نام انگلیسی",
          price: "قیمت",
          hour_24_changes: "تغییرات ۲۴ ساعته",
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
