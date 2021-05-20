<template>

    <div class="son-con">
        <div class="aside">
            <slot name="left"/>
        </div>
        <div class="main">
            <slot/>
        </div>
        <div class="right">
            <slot name="right"/>
        </div>
    </div>

</template>

<script>

export default {
    name: "son",
    props: {},
    components: {}
}

</script>

<style scoped>


.son-con {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: #fff;
}

.son-con .aside,
.son-con .right{
    flex: 0 0 150px;
    background-color: #373737;
}

.son-con .main {
    flex: 0 0 auto;
}


</style>
