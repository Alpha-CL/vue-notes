<template>

    <div
        class="avatar-con"
        :style="{
            width:`${size}rem`,
            height:`${size}rem`
        }"
    >
        <img
            :src="imgUrl"
            alt="avatar"
        >
    </div>

</template>

<script>

export default {
    name: "Avatar",
    props: {
        imgUrl: {
            type: String,
            require: true
        },
        size: {
            type: Number,
            default: 12
        }
    },
}

</script>

<style lang="scss" scoped>

.avatar-con {
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
    }
}

</style>
