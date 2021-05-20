<template>

	<div class="test-con">

	</div>

</template>

<script>


/**
 * [file-name].module.[ext]
 *
 *
 ** 模块化引入 css 文件
 */


import styles from "./test.module.css";
console.log(styles);


const div = document.createElement('div');
div.innerHTML = 'hello world';
div.className = styles['css-module'];
document.body.appendChild(div);


export default {
	name: "Test",
	props: {
	},
}


</script>

<style scoped>

.test-con {

}

</style>
