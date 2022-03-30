module.exports = {
	title: "首页",
	description: "playing around",
	themeConfig: {
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "ryannnnn的个人博客",
				items: [
					{ text: "Github", link: "https://github.com/ryannnnnwang" },
					{
						text: "掘金",
						link: "https://juejin.cn/user/3087907771127559",
					},
				],
			},
		],
		sidebar: [
			{
				title: "欢迎学习",
				path: "/",
				collapsable: false, // 不折叠
				children: [{ title: "学前必读", path: "/" }],
			},
			{
				title: "基础学习",
				path: "/handbook/ConditionalTypes",
				collapsable: false, // 不折叠
				children: [
					{ title: "条件类型", path: "/handbook/ConditionalTypes" },
					{ title: "泛型", path: "/handbook/Generics" },
				],
			},
		],
	},
}
