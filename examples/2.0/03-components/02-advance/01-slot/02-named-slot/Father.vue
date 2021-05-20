<template>

	<div class="father-con">

		<Son>
            <template v-slot:left>Aside</template>
            <template >Content</template>
            <template v-slot:right>Footer</template>
        </Son>

	</div>

</template>

<script>

import Son from "./Son";

export default {
	name: "father",
	props: {},
	components: {
		Son
	}
}

</script>

<style scoped>


.father-con {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}


</style>
