<template>

    <div>


        <IconFont
            v-for="(val, i) in types"
            :type="val"
            :key="i"
            :style="{color: '#999', fontSize: '2rem'}"
        />


    </div>


</template>

<script>


import IconFont from "./";
import iconTypes from "./iconTypes";


export default {
    name: "test",
    props: {},
    data() {
        return {
            types: Object.keys(iconTypes)
        };
    },
    components: {
        IconFont
    }
}

</script>

<style lang="scss" scoped>


</style>
