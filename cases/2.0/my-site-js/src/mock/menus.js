import Mock from "mockjs";

Mock.mock("/api/menus", "get", {
	code: 0,
	msg: "",
	data: [
		{
			link: '/',
			title: '首页',
			icon: 'home',
			exact: true
		},
		{
			link: '/article',
			title: '文章',
			icon: 'article',
			fuzzyMatch: true,
			exact: true
		},
		{
			link: '/about',
			title: '关于我',
			icon: 'aboutMe',
			exact: true
		},
		{
			link: '/project',
			title: '项目&效果',
			icon: 'project',
			exact: true
		},
		{
			link: '/message',
			title: '留言板',
			icon: 'msgBoard',
			exact: true
		},
	],
});
