<template>

    <Icon
        v-if="!isSvg"
        :type="type"
    />
    <SvgIcon
        v-else
        :type="type"
    />

</template>

<script>

import Icon from "./Icon";
import SvgIcon from "./SvgIcon";


export default {
    name: "IconFont",
    props: {
        type: {
            type: String,
            require: true
        },
        isSvg: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Icon,
        SvgIcon
    },
    data() {
        return {}
    }
}

</script>

<style lang="scss" scoped>


.iconFont-con {

}

</style>
