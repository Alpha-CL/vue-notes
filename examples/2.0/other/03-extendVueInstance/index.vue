<template>

	<div class="ExtendVueInstance-con">

        <button @click="handleClick">__sayHello</button>
	</div>

</template>

<script>

import Vue from 'vue';

/**
 * 扩展 vue 成员                    // 仅可在工程中测试，此处仅做记录
 *
 *
 ** 可在 vm.__[myMember] 中调用
 *
 ** 可在同一工程中的 组件中 通过 this.__[myMember] 调用
 *
 *
 * 需对自定义扩展成员特殊命名，避免耦合 eg: __[myMember]
 */

Vue.prototype.__sayHello = function () {

    console.log('[extend vue instance]');
};

Vue.prototype.__prop = 'myProp';



export default {
	name: "extendVueInstance",
	props: {

	},
    methods: {
    }
}

</script>

<style scoped>

.ExtendVueInstance-con {

}

</style>
