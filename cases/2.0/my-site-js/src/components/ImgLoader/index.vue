<template>

    <div class="imgLoader-con">
        <img
            v-if="!everythingDone"
            class="placeholder"
            :src="placeholder"
            alt="placeholder"
            :style="{
                opacity: placeholderOpacity,
                transition: `${duration}ms`
            }"
        >
        <img
            class="origin"
            :src="imgSrc"
            alt="origin"
            @load="handleLoaded"
            :style="{
                opacity: originOpacity,
                transition: `${duration}ms`
            }"
        >
    </div>

</template>

<script>

export default {
    name: "ImgLoader",
    props: {
        imgSrc: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: true
        },
        duration: {
            type: Number,
            default: 3000,
        }
    },
    data() {
        return {
            originLoaded: false,
            everythingDone: false,
        };
    },
    methods: {
        handleLoaded() {

            this.originLoaded = true;

            setInterval(() => {

                this.everythingDone = true;
                this.$emit('load');

            }, this.duration);
        }
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        },
        placeholderOpacity() {
            return !this.originLoaded ? 1 : 0;
        }
    }
}

</script>

<style lang="scss" scoped>

.imgLoader-con {

    position: relative;
    border: 1px solid;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: inherit;
        height: inherit;
        object-fit: cover;
    }

    .origin {

    }

    .placeholder {
        filter: blur(.5vw);
    }
}

</style>
