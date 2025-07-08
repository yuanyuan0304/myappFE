/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------


*/

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "@Utilities/translate/en.json";
import ms from "@Utilities/translate/ms.json";
import zh from "@Utilities/translate/zh.json";
import ta from "@Utilities/translate/ta.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("lang") || "en",
    // ns: ["replacements", "translations"],
    // defaultNS: "translations",
    resources: {
      en: { translation: en },
      ms: { translation: ms },
      zh: { translation: zh },
      ta: { translation: ta },
    },
    keySeparator: ".",
    nsSeparator: false,
    // interpolation: {
    //   format: function (value, format, lng) {
    //     if (value instanceof Date) return moment(value).format(format);
    //     return value;
    //   },
    // },
    debug: false,
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

export default i18n;
