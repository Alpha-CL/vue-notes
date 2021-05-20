<template>

    <i
        class="icon-con iconfont"
        :class="iconType"
    />

</template>

<script lang="ts">

import classMaps from "./classMaps";

export default {
    name: "Icon",
    props: {
        type: {
            type: String,
            require: true,
        }
    },
    computed: {
        iconType() {
            return classMaps[this.type];
        }
    }
}

</script>

<style lang="scss" scoped>

@import "//at.alicdn.com/t/font_2521460_lxqmhb77cld.css";

.icon-con {

}

</style>
