<template>

    <ul class="vertical-group-nav-con">
        <li
            v-for="(val, i) in list"
            :class="{active: val.isSelected}"
            :key="i"
        ></li>
    </ul>

</template>

<script>

export default {
    name: "VerticalGroupNav",
    props: {
        list: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {};
    },
    components: {},
    computed: {},
    methods: {},
    watch: {},
}

</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/bootstrap-reboot";

.vertical-group-nav-con {

    list-style: none;


}

</style>
