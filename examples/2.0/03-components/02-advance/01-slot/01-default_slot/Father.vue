<template>

<div class="father-con">
    <Son>
        <h1>Headline</h1>
        <div>hello world</div>
    </Son>
</div>

</template>

<script>

import Son from "./Son";

export default {
    name: "Father",
    props: {
    },
    components:{
        Son
    }
}

</script>

<style scoped>



</style>