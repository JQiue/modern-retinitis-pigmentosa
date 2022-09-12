import { defineUserConfig } from "vuepress";
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

import theme from "./theme";

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1939991_g29apyyacbb.css",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: `现代视网膜色素变性`
    },
  },
  theme,
/*   plugins: [
    docsearchPlugin({
      appId: "GNXC82PSDS",
      apiKey: "db4a8c13f20ffa235c13fe7cddf32488",
      indexName: "jinqiu-wang",
    }),
  ], */
});
