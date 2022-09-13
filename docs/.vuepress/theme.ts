import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://all.jinqiu.wang",
  author: {
    name: "一个不知名的 RP 患者",
    url: "https://jinqiu.wang",
  },
  breadcrumb: false,
  iconPrefix: "iconfont icon-",
  logo: "/logo.png",
  repo: "https://github.com/JQiue/modern-retinitis-pigmentosa",
  docsRepo: "https://github.com/JQiue/modern-retinitis-pigmentosa",
  docsDir: "docs",
  docsBranch: "main",
  locales: {
    "/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      // blog: {
      //   intro: "about.html",
      //   avatar: "/avatar.png",
      // medias: {
      //   QQ: "http://wpa.qq.com/msgrd?v=3&uin=861947542&site=qq&menu=yes",
      //   Email: "mailto:jqiue@foxmail.com",
      //   Zhihu: "https://www.zhihu.com/people/JQiue",
      //   Github: "https://github.com/JQiue",
      // },
      // },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      displayFooter: true,
      // footer:
      //   '<a href="https://beian.miit.gov.cn/" target="_blank">备案号：鄂ICP备2021016538号</a>',
    },
  },
  encrypt: {
    config: {},
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },
    mdEnhance: {
      tex: true,
      demo: true,
      align: true,
      sup: true,
      sub: true,
      tasklist: true,
      codetabs: true,
    },
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cachePic: true,
      maxSize: 10240,
      maxPicSize: 5000,
      apple: {
        icon: "/assets/icon/appleIcon152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/msIcon144.png",
        color: "#ffffff",
      },
      manifest: {},
    },
    feed: false,
  }
});
