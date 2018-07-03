<template>
    <div class="container" @click="handleGallaryClcik">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="" srcset="" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                paginationType: "fraction",
                observer: true,
                observeParents: true
            }
        };
    },
    methods: {
        handleGallaryClcik() {
            this.$emit("close");
        }
    }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
    overflow: inherit;
}

.container {
    display: flex;
    align-items: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
}

.wrapper, .gallary-img {
    width: 100%;
}

.swiper-pagination {
    color: #ffffff;
    bottom: -2.2rem;
}
</style>
