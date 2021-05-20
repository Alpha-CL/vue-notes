<template>

    <div>
        <i class="iconfont" :class="iconType"/>
    </div>

</template>

<script>

let classMaps = {
    arrowRight: 'icon-arrow',
    arrowLeft: '',
    arrowTop: '',
    arrowDown: '',
};

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
    },
}

</script>

<style scoped>


@import "//at.alicdn.com/t/font_2521460_r1a9uvmzigr.css";


</style>