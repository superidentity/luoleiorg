import { defineConfig, HeadConfig } from "vitepress";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";
import { rss } from "./genFeed";

import markdownImagePlugin from "./markdownPlugin";


export default defineConfig({
  title: "好奇心inside",
  description: "木亦@Zero的个人站点",
  cleanUrls: true,
  appearance: false,
  ignoreDeadLinks: true,
  base: "/",
  buildEnd: rss,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
  },
  vite: {
    // plugins: [RssPlugin(RSS)],
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "互联网,科技,生活,好奇心,成长,探索,curiosity,ai,chatgpt,python,mysql,linux,苹果,mac,ios"
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "互联网 | 生活 | 好奇心",
      },
    ],
    [
      "script",
      {
        // 使用谷歌分析
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-TZLMSZFS",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-TZLMSZFS');`
    ],
  ],
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push([
      "meta",
      { property: "og:title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      { property: "og:description", content: pageData.frontmatter.title },
    ]);

    return head;
  },
  themeConfig: {
    logo: "./logo.svg",
    nav: [
      { text: "ZUOLUOTV™", link: "https://youtube.com/zuoluotv" },
      { text: "关于", link: "https://qooo.tech/about/" },
    ],
    socialLinks: [
      { icon: "twitter", link: "https://x.com/buptlostar" },
      { icon: "github", link: "https://github.com/qoopp" },
    ],

    outlineTitle: "本文导览",
    lastUpdatedText: "最后更新时间",
    footer: {
      message: `Powered By <a href="https://github.com/foru17/luoleiorg">VitePress</a>`,
      copyright: `© 2015 - 2024 | 木亦 @ Zero<br/>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="d-none d-lg-inline-block">鲁ICP备2024080182号</a>
      `,
    },
  },
});

const RSS: RSSOptions = {
  title: "好奇心inside",
  baseUrl: `https://qooo.tech`,
  copyright: "Copyright (c) 好奇心inside",
  filename: "rss.xml",
};