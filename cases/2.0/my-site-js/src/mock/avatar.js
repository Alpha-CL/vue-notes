import Mock from "mockjs";

Mock.mock("/api/avatar", "get", {
	code: 0,
	msg: "",
	data: [
		{
			imgUrl: "https://img0.baidu.com/it/u=1456111218,1910681625&fm=26&fmt=auto&gp=0.jpg"
		}
	],
});
