<template>


    <div>
        <div :style="{fontSize: size}"/>
        <div :style="[styleObjectA, styleObjectB]"/>
    </div>


</template>

<script>

export default {
    name: "Avatar",
    props: {
        url: {
            type: String,
            require: true,
        },
        size: {
            type: Number,
            require: true,
        }
    },
    data() {
        return {
            cls: 'test',
            styleObjectA: {
                color: 'red'
            },
            styleObjectB: {
                width: '100px'
            },
        };
    },
    computed: {},
    methods: {},
    watch: {}
}

</script>

<style scoped>


</style>