<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="pages.length">
            <!-- slides -->
            <swiper-slide class="aaa" v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-img-tit">{{item.tit}}</p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination swiper-pagination-diy" slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
export default {
    name: "HomeIcons",
    props: {
        iconsList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                loop: true
            }
        };
    },
    computed: {
        pages() {
            const pages = [];
            this.iconsList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    },
    methods: {}
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.icons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 0.1rem;
    overflow: hidden;
    text-align: center;
}

.icon {
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
}

.icon-img {
    display: inline-block;
}

.icon-img-content {
    width: 78%;
}

.icon-img-tit {
    ellipsis();
}

.icons >>> .swiper-container-horizontal {
    padding-bottom: 0.6rem;
}
</style>


