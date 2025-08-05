// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const prodUrl = "https://www.abdtyx.cn";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yuxiao\'s Blog Site',
  tagline: 'My blog site uses docusaurus template',
  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: prodUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // projectName: 'website-2.0-blog', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Yuxiao Tang',
        items: [
          {to: '/', label: 'Home', position: 'left', activeBasePath: 'docs'},
          {to: '/', label: 'About', position: 'left', activeBasePath: 'docs'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: 'https://www.linkedin.com/in/yuxiao-tang-34278526b/details/honors/', label: 'Awards', position: 'left'},
          {to: '/misc', label: 'Misc', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Yuxiao\'s Blog Site',
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homepage',
                href: '/',
              },
              {
                label: 'Projects',
                href: '/projects',
              },
              {
                label: 'Awards',
                href: 'https://www.linkedin.com/in/yuxiao-tang-34278526b/details/honors/',
              },
              {
                label: 'Misc',
                href: '/misc',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/abdtyx',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/yuxiao-tang-34278526b/',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
