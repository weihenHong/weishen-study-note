module.exports = {
  title: "Study Notes",
  description: "Just playing around",
  base: '/weishen-study-note/',
  head: [
    ['link', { rel: 'icon', href: 'https://gitee.com/hong_weishen/gitee-chart-bed/raw/master/202305120941436.png' }]
  ],
  dest: './dist',
  themeConfig: {
    nav: [ { text: '算法', link: "/algorithm/"},{ text: "VIM", link: "/VIM/" }],
    // displayAllHeaders: true,
    sidebar: {
      '/VIM/': [
        '',     
      ],
      '/algorithm/': [
         'D1', 'D2', 'D3', 'D4',  'D5', 'D6'
      ],
    },
    // sidebar: 'auto'
  },
};
