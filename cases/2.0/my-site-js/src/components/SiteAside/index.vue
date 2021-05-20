<template>

    <div class="siteAside-con g-0 row">
        <Avatar
            :imgUrl="avatar"
        />
        <Menu
            :menus="menuDatas"
        />
        <Contact
            :contacts="contactsDatas"
        />
    </div>

</template>

<script>

import Avatar from "../../components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
    name: "SiteAside",
    props: {
        avatar: {
            type: String,
        },
        menuDatas: {
            type: Array
        },
        contactsDatas: {
            type: Array
        }

    },
    components: {
        Avatar,
        Menu,
        Contact
    }
}

</script>

<style lang="scss" scoped>

@import "~@/scss";
@import "~bootstrap/scss/vendor/rfs";

.siteAside-con {
    width: 100%;
    height: 100%;
    padding: 5rem 0 10rem;
    @include flex(col, now, sb, c);
}

</style>
