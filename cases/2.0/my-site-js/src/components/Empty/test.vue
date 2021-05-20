<template>

    <div class="test-con">

        <Empty/>

    </div>

</template>

<script>

import Empty from "./";

export default {
	name: "test",
	props: {
	},
	data() {
		return {};
	},
	components: {
		Empty
	}
}

</script>

<style lang="scss" scoped>


@import "../../scss/index";

.test-con {
    width: 500px;
    height: 500px;
    @include flexPos(row, center, center);
    border: 1px solid;
}


</style>
