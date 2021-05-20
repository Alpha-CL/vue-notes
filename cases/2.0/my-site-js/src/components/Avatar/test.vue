<template>

    <Avatar
        img-url="https://img0.baidu.com/it/u=1456111218,1910681625&fm=26&fmt=auto&gp=0.jpg"
        size="100"
    />

</template>

<script>

import Avatar from "./";

export default {
    name: "test",
    props: {},
    data() {
        return {
            imgUrl: '',
        };
    },
    components: {
        Avatar
    },
}

</script>

<style lang="scss" scoped>


</style>
