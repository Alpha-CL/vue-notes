<template>

    <i
        class="iconfont icon-con"
        :class="iconType"
    />


</template>

<script>

import iconTypes from "../iconTypes";

export default {
    name: "Icon",
    props: {
        type: {
            type: String,
            required: true
        },
    },
    computed: {
        iconType() {
            return iconTypes[this.type];
        },
        ftSize() {
            return `${this.size}px`;
        },
    }
}


</script>

<style>


@import "//at.alicdn.com/t/font_2521460_5d81qjsvju.css";


.iconfont {
    color: inherit;
    font-size: inherit;
}


</style>
