<template>

    <div class="contact-con">
        <ul>
            <li
                v-for="item in contacts"
                :key="item.iconKey"
            >
                <a :href="item.href ? item.href : '#'">
                    <IconFont :type="item.iconKey"/>
                    {{ item.text }}
                </a>
                <div
                    v-if="item.qrCode"
                    class="pop"
                >
                    <img :src="item.qrCode" alt="qrcode">
                </div>
            </li>
        </ul>
    </div>

</template>

<script>

import IconFont from "../../IconFont";

export default {
    name: "Contact",
    props: {
        contacts: {
            type: Array,
            require: true,
            default: function () {
                return [];
            }
        }
    },
    components: {
        IconFont
    }
}

</script>

<style lang="scss" scoped>

@import "~@/scss";


.contact-con {

    width: 100%;
    color: $gray-600;

    ul {

        list-style: none;
        padding-left: 0;

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        li {

            position: relative;
            cursor: pointer;
            padding-left: 3rem;

            a {
                @include flex(row, now, null, c);
                padding: 12px 24px;
                box-sizing: border-box;
                font-size: 1.2rem;
                color: $gray-600;


                .iconfont {
                    margin-right: 1rem;
                    font-size: 1.6rem;
                    color: $gray-600;
                }
            }

            .pop {
                position: absolute;
                bottom: 4.8rem;
                left: 3rem;
                transform: scaleY(0);
                transform-origin: center bottom;
                transition: .3s;
                border-radius: 12px;
                overflow: hidden;

                &:after {
                    position: absolute;
                    content: "";
                    width: 8px;
                    height: 8px;
                    background-color: #fff;
                    left: 50%;
                    bottom: 2px;
                    transform: translateX(-50%) rotate(45deg);
                }
            }

            &:hover {
                background-color: #3c3c3c;
                color: #fff;

                .pop {
                    transform: scaleY(1);
                    transition: .3s;
                }
            }
        }
    }
}

</style>
