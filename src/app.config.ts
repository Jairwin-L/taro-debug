export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/test/index',
		'pages/other/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
	tabBar: {
    color: '#000',
    selectedColor: '#1677ff',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_main_selected.png',
        iconPath: 'images/tabbar_main.png',
        text: '首页',
      },
      {
        pagePath: 'pages/test/index',
        selectedIconPath: 'images/tabbar_mine_selected.png',
        iconPath: 'images/tabbar_mine.png',
        text: '测试',
      },
    ],
  },
})
