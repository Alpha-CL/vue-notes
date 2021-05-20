<template>

    <div class="test">
        <ImgLoader
            imgSrc="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
            @load="handleLoaded"
        />
    </div>

</template>

<script>

import ImgLoader from "./index";

export default {
	name: "test",
	props: {
	},
	data() {
		return {};
	},
	components: {
		ImgLoader
	},
    methods: {
        handleLoaded() {

        }
    }
}

</script>

<style lang="scss" scoped>

.test {
    //position: relative;
    width: 500px;
    height: 400px;
}


</style>
