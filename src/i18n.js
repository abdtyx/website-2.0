import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_navbar from './locales/en/navbar.json';
import zh_navbar from './locales/zh/navbar.json';
import en_homepage from './locales/en/homepage.json';
import zh_homepage from './locales/zh/homepage.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: en_navbar,
        homepage: en_homepage,
      },
      zh: {
        navbar: zh_navbar,
        homepage: zh_homepage,
      },
    },
    lng: localStorage.getItem('lang') || 'en',
    ns: ['navbar', 'homepage'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
