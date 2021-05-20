<template>

    <div class="test-con">
        <Menu
            :datas="datas"
        />
    </div>

</template>

<script>

import Menu from "./index";

export default {
    name: "test",
    props: {},
    data() {
        return {
            datas: [
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
            ]
        };
    },
    components: {
        Menu
    }
}

</script>

<style lang="scss" scoped>

.test-con {
    width: 250px;
    height: 800px;
    border: 1px solid;
}

</style>
