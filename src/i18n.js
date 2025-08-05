import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_navbar from './locales/en/navbar.json';
import zh_navbar from './locales/zh/navbar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: en_navbar,
      },
      zh: {
        navbar: zh_navbar,
      },
    },
    lng: localStorage.getItem('lang') || 'en',
    ns: ['navbar'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
