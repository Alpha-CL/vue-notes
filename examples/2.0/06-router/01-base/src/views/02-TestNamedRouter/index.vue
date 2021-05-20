<template>

    <div class="testNamedRouter-con">
        <div class="nav">
            <RouterLink :to="{name:'home'}" exact>首页</RouterLink>
            <RouterLink :to="{name:'blog'}">博客</RouterLink>
            <RouterLink :to="{name:'about'}">关于</RouterLink>
            <RouterLink :to="{name:'message'}">消息</RouterLink>
            <RouterLink :to="{name:'project'}">工程</RouterLink>
        </div>
        <RouterView/>
    </div>


</template>

<script>

export default {
    name: "TestNamedRouter",
    props: {},
    components: {}
}

</script>

<style lang="scss" scoped>

.testNamedRouter-con {

    .nav {
        margin-bottom: 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        background-color: #ccc;

        a {
            padding: 20px;
            flex: auto;
            text-align: center;
            text-decoration: none;
            color: #333;
            font-weight: bold;

            &:hover {
                background-color: #3c3c3c;
                color: #fff;
            }

            &.router-link-active {
                background-color: #999;
            }

            &.router-link-exact-active {
                background-color: #666;
                color: #fff;
            }
        }
    }
}

</style>
