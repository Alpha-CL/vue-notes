<template>

    <div class="layout-con container-fluid">
        <div class="row">
            <div class="left col-2 g-0">
                <slot name="left"/>
            </div>
            <div class="main col g-0">
                <slot/>
            </div>
<!--            <div class="right col-2 g-0">-->
<!--                <slot name="right "/>-->
<!--            </div>-->
        </div>
    </div>

</template>

<script>

export default {
    name: "Layout",
    props: {},
    components: {},
}

</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/bootstrap";
@import "~@/scss/index";


.layout-con {

    width: 100vw;
    height: 100vh;
    background-color: inherit;
    overflow: hidden;

    .left,
    .right,
    .main {
        height: 100vh;
        overflow: hidden;
    }

    .left {
        background-color: inherit;
    }

    .right {
        background-color: inherit;
    }

    .main {
        background-color: inherit;
    }

    .test {
        @include position(fixed, null, 0, 0, null);
    }
}

</style>