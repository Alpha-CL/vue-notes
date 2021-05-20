<template>

    <div
        class="carouselItem-con"
        ref="container"
        @mousemove="handleMousemove"
        @mouseleave="handleMouseleave"
    >
        <div class="info" ref="info">
            <div class="title" ref="title">{{ banners.title }}</div>
            <div class="desc" ref="desc">{{ banners.description }}</div>
        </div>
        <div class="mask"/>
        <div
            ref="banner"
            class="banner"
            :style="imgPosition"
        >
            <ImgLoader

                :imgSrc="banners.bigImg"
                :placeholder="banners.midImg"
                @load="this.showInfo"
            />
        </div>
    </div>

</template>

<script>
import ImgLoader from "@/components/ImgLoader";

export default {
    name: "CarouselItem",
    props: ['banners'],
    data() {
        return {
            titleWith: 0,
            descWidth: 0,
            containerSize: null,
            innerSize: null,
            mouseX: 0,
            mouseY: 0,
        };
    },
    components: {
        ImgLoader
    },
    methods: {
        showInfo() {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = '2s';
            this.$refs.title.style.width = this.titleWith + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.style.width = this.descWidth + 'px';
        },
        setSize() {

            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            };

            this.innerSize = {
                width: this.$refs.banner.clientWidth,
                height: this.$refs.banner.clientHeight
            };

            console.log(this.containerSize, this.innerSize);
        },
        backInitPosition() {
            this.mouseX = this.initPosition.x;
            this.mouseY = this.initPosition.y;
        },
        handleMousemove(e) {

            const rect = this.$refs.container.getBoundingClientRect();

            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;

            console.log(this.mouseY, this.mouseX);

        },
        handleMouseleave() {
            this.backInitPosition();
        }
    },
    computed: {

        imgPosition() {

            if (!this.innerSize || !this.containerSize) {
                return;
            }

            const extraWidth = this.innerSize.width - this.containerSize.width,
                extraHeight = this.innerSize.height - this.containerSize.height,
                left = -extraWidth / this.containerSize.width * this.mouseX,
                top = -extraHeight / this.containerSize.height * this.mouseY;

            // console.log(extraHeight, extraWidth);

            return {

                transform: `translateX(${left}px) translateY(${top}px)`,
            }
        },
        initPosition() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            }
        }
    },
    mounted() {
        this.titleWith = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        // console.log(this.titleWith, this.descWidth);
        this.setSize();
        this.backInitPosition();
        window.addEventListener('resize', this.setSize);
    },
    destroyed() {

        window.removeEventListener(this.setSize);
    },
}

</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/bootstrap";
@import "~@/scss";

.carouselItem-con {

    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    .info,
    .banner {
        position: absolute;
    }

    .banner {
        width: 120%;
        height: 120%;
        z-index: $zindex-dropdown;
        transition: .3s;
    }

    .mask {
        @include position(absolute, 0, 0, 0, 0);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: $zindex-sticky;
    }

    .info {
        color: white;
        top: 50%;
        left: 13rem;
        transform: translateY(-80%);

        white-space: nowrap;
        overflow: hidden;
        z-index: $zindex-fixed;

        .title,
        .desc {
            white-space: nowrap;
            overflow: hidden;
            opacity: 0;
        }

        .title {
            margin-bottom: 1rem;
            font-size: 4rem;
            color: $gray-200;
        }

        .desc {
            font-size: 1.5rem;
            color: $gray-600;
        }
    }
}

</style>
