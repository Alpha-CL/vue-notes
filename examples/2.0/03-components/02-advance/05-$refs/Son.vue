<template>

    <div class="son-con">
        data.a: {{a}}
        data.b: {{b}}
        <a href="#" ref="anchor"></a>
    </div>

</template>

<script>

export default {
    name: "son",
    props: {},
    data() {
        return {
            a: 1,
            b: 2
        };
    },
    methods: {
        sayHello() {
            console.log('son comp');
        }
    },
    components: {}
}

</script>

<style scoped>


</style>
