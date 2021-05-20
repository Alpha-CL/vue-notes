import Mock from "mockjs";

Mock.mock("/api/contact", "get", {
	code: 0,
	msg: "",
	data: [
		{
			iconKey: 'github',
			text: 'Alpha-CL',
			href: 'github'
		},
		{
			iconKey: 'mail',
			text: 'xiaodao_92@yeah.net',
			href: 'mailto:xiaodao_92@yeah.net'
		},
		{
			iconKey: 'qq',
			text: '498193405',
			href:
				'tencent://message/?Menu=yes&uin=4981934405&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45'
		},
		{
			iconKey: 'wechart',
			text: 'alphargb',
			qrCode: 'http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png'
		},
	],
});
