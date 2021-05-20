<template>

    <div class="App">
        <TestRouter/>
        <hr>
        <TestNamedRouter/>
        <hr>
    </div>

</template>

<script>

import TestNamedRouter from "./views/02-TestNamedRouter";
import TestRouter from "./views/01-TestRouter";

export default {
    name: "App",
    props: {},
    components: {
        TestRouter,
        TestNamedRouter
    }
}

</script>

<style lang="scss" scoped>


</style>