import { sidebar } from "vuepress-theme-hope";

const guide: string[] = [
  "",
];

export const zh = sidebar({
  "/about": [""],
  "/guide/": guide
});
