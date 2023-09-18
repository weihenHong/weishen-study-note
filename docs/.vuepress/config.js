module.exports = {
  title: "Study Notes",
  description: "Just playing around",
  base: "/weishen-study-note/",
  head: [["link", { rel: "icon", href: "/img/logo.jpg" }]],
  dest: "./dist",
  themeConfig: {
    nav: [
      { text: "算法", link: "/algorithm/" },
      { text: "VIM", link: "/VIM/" },
      { text: "Typescript", link: "/Typescript/" },
    ],
    // displayAllHeaders: true,
    sidebar: {
      "/VIM/": [""],
      "/Typescript/": [""],
      "/algorithm/": ["D1", "D2", "D3", "D4", "D5", "D6"],
    },
    // sidebar: 'auto'
  },
};
