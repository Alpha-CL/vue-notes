<template>

    <div class="empty-con">
        <IconFont
            type="empty"
            :style="{color:'#999'}"
        />
        <div>{{text}}</div>
    </div>

</template>

<script>

import IconFont from "../IconFont";

export default {
    name: "Empty",
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    },
    components: {
        IconFont
    },
}

</script>


<style lang="scss" scoped>

@import "../../scss/index";


.empty-con {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;


    color: inherit;
}


</style>
