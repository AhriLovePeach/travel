<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <div class="icon" v-for="item of iconsList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p>{{item.tit}}</p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
export default {
    name: "HomeIcons",
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                loop: true
            },
            iconsList: [
                {
                    id: "001",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    tit: "景点门票"
                },
                {
                    id: "002",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    tit: "一日游"
                },
                {
                    id: "003",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    tit: "必游榜单"
                },
                {
                    id: "004",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    tit: "动植物园"
                },
                {
                    id: "005",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                    tit: "踏青赏花"
                },
                {
                    id: "006",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
                    tit: "普陀山"
                },
                {
                    id: "007",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
                    tit: "上海欢乐谷"
                },
                {
                    id: "008",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
                    tit: "Q+精选"
                },
                {
                    id: "009",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
                    tit: "上海迪士尼"
                },
                {
                    id: "010",
                    imgUrl:
                        "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
                    tit: "全部玩乐"
                }
            ]
        };
    }
};
</script>
<style lang="stylus" scoped>
.icons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 0.1rem;
    overflow: hidden;
    padding-bottom: 50%;
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
</style>


