<template>

    <div
        class="home-con"
        ref="container"
        @wheel="handleWheel"
        v-loading="isLoading"
    >
        <ul
            class="carousel"
            :style="{marginTop: bannerMove}"
            @transitionend="handleTransitionend"
        >
            <li
                v-for="val in data"
                :key="val.id"
            >
                <CarouselItem :banners="val"/>
            </li>
        </ul>
        <div
            class="control control-top"
            v-show="index >= 1"
            @click="switchTo(index - 1)"
        >
            <IconFont
                type="arrowTop"
            />
        </div>
        <div
            class="control control-down"
            v-show="index < data.length - 1"
            @click="switchTo(index + 1)"
        >
            <IconFont
                type="arrowDown"
            />
        </div>
        <ul class="dots">
            <li
                class="dot"
                v-for="(val, i) in data"
                :key="val.id"
                :class="{active: i === index}"
                @click="switchTo(i)"
            />
        </ul>
    </div>

</template>

<script>
import {getBanner} from "@/api/banner";
import CarouselItem from "./CarouselItem";
import IconFont from "@/components/IconFont";
import fetchData from "../../mixins/fetchData";

export default {
    name: "Home",
    mixins: [fetchData([])],
    props: {},
    data() {
        return {
            index: 0,
            containerHeight: 0,
            isScrollWheel: false,
        };
    },
    methods: {
        switchTo(i) {
            this.index = i;
        },
        handleWheel(e) {

            if (this.isScrollWheel) {
                return;
            }
            if (e.deltaY < -10 && this.index > 0) {
                this.isScrollWheel = true;
                this.index--;
            } else if (e.deltaY > 10 && this.index < this.data.length - 1) {
                this.isScrollWheel = true;
                this.index++;
            }
        },
        handleTransitionend() {
            this.isScrollWheel = false;
        },
        handleResize() {
            this.containerHeight = this.$refs.container.clientHeight;
        },
        async fetchData() {
            return await getBanner();
        }
    },
    components: {
        CarouselItem,
        IconFont,
    },
    computed: {
        bannerMove() {
            return -this.index * this.containerHeight + 'px';
        }
    },
    async created() {
        getBanner()
            .then(resp => {
                this.data = resp;
            });
    },
    mounted() {
        this.containerHeight = this.$refs.container.clientHeight;
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener(this.handleResize);
    }
};

</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/bootstrap";

.home-con {

    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;


    // test
    //width: 400px;
    //height: 300px;
    //overflow: visible;
    //margin: 100px auto;


    .control,
    .dots {
        cursor: pointer;
        z-index: $zindex-tooltip;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .control {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        .iconfont {
            font-size: 4rem;
            color: $gray-400;
        }
    }

    .control-top {
        top: 2rem;
        animation: jump-up 2s infinite;
    }

    .control-down {
        bottom: 2rem;
        animation: jump-down 2s infinite;
    }

    .carousel {
        width: 100%;
        height: 100%;
        transition: 1000ms;

        li {
            width: 100%;
            height: 100%;
        }
    }

    .dots {
        position: fixed;
        right: 4rem;
        top: 50%;
        transform: translateY(-50%);

        .dot {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: .2rem solid $gray-600;
            margin-bottom: 2rem;
            box-sizing: border-box;

            &:last-child {
                margin-bottom: 0;
            }

            &.active {
                background-color: $white;
                border: none;
            }
        }
    }


    @keyframes jump-up {
        0% {
            transform: translate(-50%, .7rem);
        }
        50% {
            transform: translate(-50%, -.7rem);
        }
        100% {
            transform: translate(-50%, .7rem);
        }
    }

    @keyframes jump-down {
        0% {
            transform: translate(-50%, -.7rem);
        }
        50% {
            transform: translate(-50%, .7rem);
        }
        100% {
            transform: translate(-50%, -.7rem);
        }
    }
}


</style>