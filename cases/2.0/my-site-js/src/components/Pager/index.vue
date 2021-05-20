<template>

    <div
        class="pager-con"
        v-show="total > 1"
    >
        <a
            href="#"
            :class="{disabled: current === 1}"
            @click="handleClick(1)"
        >|&lt;&lt;</a>
        <a
            href="#"
            :class="{disabled: current === 1}"
            @click="handleClick(current - 1)"
        >&lt;&lt;</a>
        <a
            href="#"
            v-for="(n, i) in visibleNums"
            :class="{active: n === current}"
            @click="handleClick(n)"
            :key="i"
        >{{ n }}</a>
        <a
            href="#"
            :class="{disabled: current === pageMaxNum}"
            @click="handleClick(current + 1)"
        >&gt;&gt;</a>
        <a
            href="#"
            :class="{disabled: current === pageMaxNum}"
            @click="handleClick(pageMaxNum)"
        >&gt;&gt;|</a>
    </div>

</template>


<script>

export default {
    name: "Pager",
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 10
        },
        visibleNumber: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {};
    },
    computed: {
        pageMaxNum() {

            return Math.ceil(this.total / this.limit);
        },
        visibleMinMun() {

            let min = this.current - Math.floor(this.visibleNumber / 2);

            if (min < 1) {

                min = 1;
            }

            return min;
        },
        visibleMaxNum() {

            let max = this.visibleMinMun + this.visibleNumber - 1;

            if (max > this.pageMaxNum) {

                max = this.pageMaxNum;
            }

            return max;
        },
        visibleNums() {

            let nums = [];

            for (let i = this.visibleMinMun; i <= this.visibleMaxNum; i++) {

                nums.push(i);
            }

            return nums;
        }
    },
    methods: {
        handleClick(newPageNum) {

            if (newPageNum < 1) {

                newPageNum = 1;

            } else if (newPageNum > this.pageMaxNum) {

                newPageNum = this.pageMaxNum;

            } else if (newPageNum === this.current) {

                return;
            }

            this.$emit('pageNumChange', newPageNum);
        }
    }
}

</script>


<style lang="scss" scoped>


@import "../../scss/varibale";


.pager-con {

    display: flex;
    justify-content: center;
    margin: 20px 0;

    a {
        color: $primary;
        margin: 0 6px;

        &.disabled {
            color: $lightWords;
            cursor: not-allowed;
        }

        &.active {
            color: $words;
            font-weight: bold;
            cursor: text;
        }
    }
}


</style>

