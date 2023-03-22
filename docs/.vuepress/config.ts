/**
 * @file config.ts
 * @brief Configuration of the translated SimplifiedEnglish.
 * @copyright Copyright (c) 2023 SimplifiedEnglish. All rights reserved.
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from '@vuepress/cli'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { defaultTheme } from '@vuepress/theme-default'

import {sideBarConfig} from './configs'
    
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SimplifiedEnglish',
  description: 'SimplifiedEnglish',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    docsRepo: 'https://github.com/jollacc/jollacc.github.io',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: 'Edit in GitHub',
    lastUpdatedText: 'Last Update',
    contributorsText: 'Contributors'
  }),
  
  plugins: [
    sitemapPlugin({
      hostname: 'https://blog.chinafreebsd.org/',
    }),
    seoPlugin({
      hostname: 'https://blog.chinafreebsd.org/',
    }),
  ],
});
