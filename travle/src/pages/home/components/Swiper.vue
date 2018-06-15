<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperList.length">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id" data-swiper-autoplay="2000">
                <img class="swiper-img" :src="item.imgUrl" alt="" srcset="" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeSwiper",
    props: {
        swiperList: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                pagination: ".swiper-pagination",
                loop: true
            }
        };
    }
};
</script>
<style lang="stylus" scoped>
.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background: #eeeeee;
}

.wrapper >>> .swiper-pagination-bullet-active {
    background: #ffffff;
}

.swiper-img {
    width: 100%;
}
</style>


