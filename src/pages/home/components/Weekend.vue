<template lang="html">
    <div class="">
        <div class="title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="本周去哪浪">
            <span>本周去哪浪</span>
        </div>
        <ul >
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.title">
                </div>
                <div class="item-info">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeWeekend",
    props: {
        list: Array
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl'
    .title
        margin-top: 0.2rem
        line-height:.9rem
        text-indent:.2rem
        color: #212121;
        font-size: .35rem
        ellipsis()
        img
            width: .4rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #212121
            ellipsis()


</style>
