<template>


    <svg
        class="icon"
        aria-hidden="true"
        :style="{fontSize: this.size}"
    >
        <use :xlink:href="svgType"></use>
    </svg>


</template>

<script>


import "../../../assets/iconfont/iconfont.js"
import iconTypes from "../iconTypes";


export default {
    name: "Svg",
    props: {
        type: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 100
        }
    },
    computed: {
        svgType() {
            return `#${iconTypes[this.type]}`;
        }
    }
}


</script>

<style lang="scss">


.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}


</style>
