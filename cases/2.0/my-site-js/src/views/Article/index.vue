<template>

	<div class="article-con">
        <VerticalGroupNav/>
	</div>

</template>

<script>

import VerticalGroupNav from "./components/VerticalGroupNav";
export default {
	name: "Article",
	props: {
	},
	components:{
        VerticalGroupNav
	},
}

</script>

<style lang="scss" scoped>

.article-con {

}

</style>
