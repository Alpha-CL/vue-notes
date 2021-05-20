<template>

	<div class="testRouter-con">
        <div class="nav">
            <RouterLink to="/" exact>首页</RouterLink>
            <RouterLink to="/blog">博客</RouterLink>
            <RouterLink to="/about">关于</RouterLink>
            <RouterLink to="/message">消息</RouterLink>
            <RouterLink to="/project">工程</RouterLink>
        </div>
        <RouterView/>
	</div>

</template>

<script>

export default {
	name: "TestRouter",
	props: {},
    data() {
        return {

        };
    },
	components: {}
}

</script>

<style lang="scss" scoped>

.testRouter-con {

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
                background-color: #999999;
            }

            &.router-link-exact-active {
                background-color: #666;
                color: #fff;
            }
        }
    }
}


</style>
