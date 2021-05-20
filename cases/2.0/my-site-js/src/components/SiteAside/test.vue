<template>

    <div class="test-con">
        <SiteAside
            :avatar="imgUrl"
            :menuDatas="menuDatas"
            :contactsDatas="contactsDatas"
        />
    </div>


</template>

<script>

import SiteAside from "./";

export default {
    name: "test",
    props: {},
    data() {
        return {
            imgUrl:'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg',
            menuDatas: [
                {
                    link: '/',
                    title: '首页',
                    icon: 'home',
                },
                {
                    link: '/blog',
                    title: '文章',
                    icon: 'article',
                    fuzzyMatch: true
                },
                {
                    link: '/about',
                    title: '关于我',
                    icon: 'aboutMe',
                },
                {
                    link: '/project',
                    title: '项目&效果',
                    icon: 'project',
                },
                {
                    link: '/message',
                    title: '浏览版',
                    icon: 'msgBoard',
                },
            ],
            contactsDatas: [
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

        };
    },
    components: {
        SiteAside
    }
}

</script>

<style lang="scss" scoped>

.test-con {
    width: 250px;
    height: 800px;
    border: 1px solid;
    background-color: #3c3c3c;
    color: #999;
}

</style>