<template>

    <div class="son-con">
        <slot/>
        <div class="control">
            <button>confirm</button>
            <button>cancel</button>
        </div>
    </div>

</template>

<script>

export default {
    name: "Son",
    props: {},
}

</script>

<style scoped>


.son-con {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -80%);
    padding: 10px 30px 20px;
    border: 1px solid;
    border-radius: 6px;
}

.control {

    margin-top: 20px;
}

.control button:nth-child(1) {
    margin-right: 12px;
}


</style>