<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
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
    data() {
        return {
            swiperList: [
                {
                    id: "0001",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1806/f8/17ad6b47ecce9702.jpg_750x200_44330998.jpg"
                },
                {
                    id: "0002",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg"
                },
                {
                    id: "0003",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1805/ab/e37740bb7cc63502.jpg_750x200_8c76c2d7.jpg"
                },
                {
                    id: "0004",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1805/d2/2a72bb766d8f6d02.jpg_750x200_e1c78528.jpg"
                }
            ],
            swiperOption: {
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


