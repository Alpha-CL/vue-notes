<template>

	<getMountDomOfComp

	/>

</template>

<script>

import getMountDomOfComp from "./";
import Vue from 'vue';

function getComponentRootDom(comp, props) {

    const vm = new Vue({
        render: (h) => h(comp, {props})
    });

    vm.$mount();

    return vm.$el;
}

const el = getComponentRootDom(getMountDomOfComp, {key: 'val'});

console.log(el);


export default {
	name: "test",
	props: {
	},
	data() {
		return {};
	},
	components: {
		getMountDomOfComp
	}
}


</script>

<style lang="scss" scoped>



</style>
