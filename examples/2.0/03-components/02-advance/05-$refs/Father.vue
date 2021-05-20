<template>

	<div class="father-con">

        <p ref="paragraph">This is paragraph</p>
		<Son ref="sonComp"></Son>
        <button @click="handleClick">view $refs</button>

	</div>

</template>

<script>


/**
 * $refs: {
 *      domRef: dom,                // 获取真实的 dom
 *      compRef: comp,              // 获取子组件的 实例
 * }
 *
 *
 ** 1) <dom ref='domRef'/>
 *
 ** 2) <comp ref='compRef'/>
 *
 *
 ** 避免使用 $ref，不符合 vue 的设计理念
 *  ( vue设计理念: 元素由数据渲染，单向数据流 )
 */


import Son from "./Son";

export default {
	name: "father",
	props: {},
	components: {
		Son
	},
    methods: {
        handleClick() {

            console.log(this.$refs);

            // console.log(this.$refs.sonComp.$refs.anchor);
        }
    }
}

</script>

<style scoped>


</style>
