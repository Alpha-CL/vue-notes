<template>

    <div class="app container-fluid g-0" id="app">
        <Layout>
            <template #left>
                <SiteAside
                    :avatar="avatarUrl"
                    :menuDatas="menuDatas"
                    :contactsDatas="contactDatas"
                />
            </template>
            <template>
                <RouterView/>
            </template>
            <template #right>
            </template>
        </Layout>
    </div>

</template>

<script>
import {getContact} from "@/api/contact";
import {getMenus} from "@/api/menus";
import {getAvatar} from "@/api/avatar";

import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";


export default {

    name: 'App',
    components: {
        Layout,
        SiteAside
    },
    data() {
        return {
            avatarUrl: '',
            menuDatas: [],
            contactDatas: [],
        }
    },

    async created() {

		getContact()
			.then(resp => {
				//console.log(resp);
                this.contactDatas = resp;
			});

		getMenus()
			.then(resp => {
				// console.log(resp);
				this.menuDatas = resp;
			});

        getAvatar()
            .then(resp => {
                // console.log(resp);
                this.avatarUrl = resp[0].imgUrl;
            });
    },
}

</script>

<style lang="scss">


@import "~bootstrap/scss/bootstrap";
@import "~@/scss/_boostrap-icon.scss";
@import "~@/scss";

body {
    padding: 0 !important;
}

.app {

    .layout-con {

        .row .left {
            background-color: $gray-900;
            color: $white;
        }

    }
}


</style>