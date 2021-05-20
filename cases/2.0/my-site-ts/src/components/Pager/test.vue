<template>

    <div class="test">

        <Pager
            :current="current"
            :total="total"
            :limit="9"
            :visible-number="9"
            @pageNumChange="pageNumChange"
        />

    </div>

</template>

<script lang="ts">

import Pager from "./index";

export default {

    name: 'test',
    data() {

        return {
            current: 10,
            total: 300,
        };
    },
    components: {
        Pager
    },
    methods:{
        pageNumChange(newPageNum) {

            // console.log(newPageNum);

            this.current = newPageNum;
        }
    }
}


</script>

<style>


</style>