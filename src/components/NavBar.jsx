import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { RiTranslate } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

function NavBarItem({link, text}) {
  return (
    <a href={link} className="text-gray-600 hover:text-blue-500 dark:text-stone-100">{text}</a>
  )
}

function NavBarItemMobile({link, text}) {
  return (
    <a href={link} className="block text-gray-600 hover:text-blue-500 dark:text-stone-100">{text}</a>
  )
}

function Toggle() {
  const getInitialMode = () => {
    const curTheme = localStorage.getItem('theme');
    if (curTheme === 'dark') return 1;
    if (curTheme === 'system') return 2;
    return 0;
  };

  let [lightMode, setLightMode] = useState(getInitialMode);
  function clickToggle() {
    setLightMode((lightMode + 1) % 2);
  }
  let icon;
  if (lightMode == 0) {
    icon = <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="dark:text-white"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>;
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else if (lightMode == 1) {
    icon = <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="dark:text-white"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>;
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (lightMode == 2) {
    icon = <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="dark:text-white"><path fill="currentColor" d="m12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9zm4.95-13.95c1.313 1.313 2.05 3.093 2.05 4.95s-0.738 3.637-2.05 4.95c-1.313 1.313-3.093 2.05-4.95 2.05v-14c1.857 0 3.637 0.737 4.95 2.05z"></path></svg>
    // TODO: Get system light mode
    localStorage.setItem('theme', 'system');
  }
  return (
    <button type="button" className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1 me-1 xl:me-3 transition-colors duration-300" onClick={clickToggle}>
      {icon}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar');

  const changeLanguage = () => {
    let lng = 'zh';
    if (i18n.language === 'zh') {
      lng = 'en';
    }
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <a href="/"><div className="text-xl font-bold text-blue-600 dark:text-sky-400">{t('title')}</div></a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 mx-6 xl:mx-16">
            <NavBarItem link={"/"} text={t('menu.home')} />
            <NavBarItem link={"/"} text={t('menu.about')} />
            {/* <NavBarItem link={"/blog"} text={"Blog"} /> */}
            <div className="text-gray-600 hover:text-blue-500 dark:text-stone-100">
              <a href="/blog">{t('menu.blog')} <FaExternalLinkAlt className="inline" size="0.75em" /></a>
            </div>
            <NavBarItem link={"/projects"} text={t('menu.projects')} />
            <NavBarItem link={"https://www.linkedin.com/in/yuxiao-tang-34278526b/details/honors/"} text={t('menu.awards')} />
            <NavBarItem link={"/misc"} text={t('menu.misc')} />
          </div>

          <div className="ml-auto"></div>

          <div className="hidden lg:flex pr-1 xl:me-2">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full pl-1 text-gray-600 hover:text-blue-500 dark:text-stone-100 md:p-0 md:w-auto"
              onClick={() => changeLanguage()}
            >
              <RiTranslate className="mr-1" size="1.5em" />
              {i18n.language === 'en' ? "English" : "中文"}
            </button>
          </div>

          <a href="https://github.com/abdtyx" className="hidden lg:flex hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1 xl:me-2 transition-colors duration-300">
            <svg fill="#000000" width="28px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="dark:text-white"><path fill="currentColor" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
          </a>
          <div className="hidden lg:flex">
            <Toggle />
          </div>

          <div className="hidden lg:flex relative max-w-md">
            <input
              type="text"
              placeholder={`${t('menu.search')}   Ctrl+K`}
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden px-6">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pt-4 md:pt-0 lg:hidden px-4 pb-4 space-y-3">
          <NavBarItemMobile link={"/"} text={t('menu.home')} />
          <NavBarItemMobile link={"/"} text={t('menu.about')} />
          {/* <NavBarItemMobile link={"/blog"} text={"Blog"} /> */}
          <div className="block text-gray-600 hover:text-blue-500 dark:text-stone-100">
            <a href="/blog">{t('menu.blog')} <FaExternalLinkAlt className="inline" size="0.75em" /></a>
          </div>
          <NavBarItemMobile link={"/projects"} text={t('menu.projects')} />
          <NavBarItemMobile link={"https://www.linkedin.com/in/yuxiao-tang-34278526b/details/honors/"} text={t('menu.awards')} />
          <NavBarItemMobile link={"/misc"} text={t('menu.misc')} />

          <div className="flex flex-row">
            <a href="https://github.com/abdtyx" className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1 me-2 transition-colors duration-300">
              <svg fill="#000000" width="28px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="dark:text-white"><path fill="currentColor" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
            </a>
            <Toggle />
            <div className="p-1 me-2">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center w-full text-gray-600 hover:text-blue-500"
                onClick={() => changeLanguage()}
              >
                <RiTranslate className="mr-1" size="1.5em" />
                {i18n.language === 'en' ? "English" : "中文"}
              </button>
            </div>
          </div>

          <div className="relative max-w-md">
            <input
              type="text"
              placeholder={`${t('menu.search')}   Ctrl+K`}
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
