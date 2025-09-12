import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_navbar from './locales/en/navbar.json';
import zh_navbar from './locales/zh/navbar.json';
import en_homepage from './locales/en/homepage.json';
import zh_homepage from './locales/zh/homepage.json';
import en_footer from './locales/en/footer.json';
import zh_footer from './locales/zh/footer.json';
import en_awards from './locales/en/awards.json';
import zh_awards from './locales/zh/awards.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: en_navbar,
        homepage: en_homepage,
        footer: en_footer,
        awards: en_awards,
      },
      zh: {
        navbar: zh_navbar,
        homepage: zh_homepage,
        footer: zh_footer,
        awards: zh_awards,
      },
    },
    lng: localStorage.getItem('lang') || 'en',
    ns: ['navbar', 'homepage', "footer", "awards"],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
