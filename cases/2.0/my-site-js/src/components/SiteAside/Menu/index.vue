<template>

    <div
        class="menu-con"
    >
        <RouterLink
            class="menu"
            v-for="(val, i) in menus"
            :exact="val.exact"
            :to="val.link"
            :key="i"
            active-class="selected"
            exact-active-class=""
        >
            <IconFont :type="val.icon"/>
            <span>{{val.title}}</span>
        </RouterLink>
    </div>

</template>

<script>

import IconFont from "../../IconFont";

export default {
    name: "Menu",
    props: {
        menus: {
            type: Array,
            required: true,
            default: function () {
                return [];
            }
        }
    },
    components: {
        IconFont
    },
    methods:{
        isSelected(menu) {

            const link = menu.link.toLowerCase(),
                pathname = location.pathname.toLowerCase();

            if (menu.fuzzyMatch) {

                return pathname.startsWith(link);

            } else {

                return pathname === link;
            }
        }
    }
}

</script>

<style lang="scss" scoped>

@import "~@/scss";

.menu-con {

    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    font-size: 1.4rem;

    .menu {
        padding: 1.2rem 4.8rem;
        @include flex(row, now, null, c);
        box-sizing: border-box;
        cursor: pointer;
        color: $gray-400;

        .iconfont {
            font-size: 2.6rem;
            margin-right: 1rem;
        }

        &.selected {
            background-color: $gray-900;
            color: #fff;
            font-weight: bold;

            .iconfont {
                font-weight: normal;
            }
        }
    }
}

</style>
