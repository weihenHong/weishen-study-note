module.exports = {
  title: "Study Notes",
  description: "Just playing around",
  base: '/weishen-study-note/',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpeg' }]
  ],
  // base:'/vim-vuepress/', 
  dest: './dist',
  themeConfig: {
    nav: [ { text: '算法', link: "/algorithm/"},{ text: "VIM", link: "/VIM/" }],
    // displayAllHeaders: true,
    sidebar: {
      '/VIM/': [
        '',     
      ],
      '/algorithm/': [
         'D1', 'D2' 
      ],
    },
    // sidebar: 'auto'
  },
};
