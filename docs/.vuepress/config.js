module.exports = {
  title: '微笑的蛋壳呀',                       // 标题
  description: '饭要一口一口吃，路要一步一步走',  // 描述
  head: [ 
    ['link', { rel: 'icon', href: '/img/logo.png' }], // 标签栏里的头像
	['link', { rel: 'styleSheet', href: '/css/style.css' }]
  ],
  base: '/vuepressBlog/',  // 部署到github的相关配置
  markdown: {
    lineNumbers: true      // 代码块显示行号
  },
  themeConfig: {
	nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),     // 侧边栏配置
    sidebarDepth: 2,        // 侧边栏显示2级
	lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
	serviceWorker: {
		updatePopup: {
			message: "有新的内容.",
			buttonText: '更新'
		}
	},
	editLinks: true,
	editLinkText: '在 GitHub 上编辑此页 ！'
	
  }
};