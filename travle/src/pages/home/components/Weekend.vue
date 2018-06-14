<template>
    <div>
        <h2 class="recomment-title">周末去哪儿</h2>
        <ul>
            <li class="recomment-item" v-for="item in recommentList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HomeWeekend",
    data() {
        return {
            recommentList: [
                {
                    id: "001",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
                    title: "上海必游TOP10",
                    desc: "中西合璧，现代和传统各有各的精彩"
                },
                {
                    id: "002",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg",
                    title: "亲子时光TOP10",
                    desc: "走进自然或玩转乐园，感知大千世界"
                },
                {
                    id: "003",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg",
                    title: "上海城市观光",
                    desc: "来这里寻找你所认识的上海"
                },
                {
                    id: "004",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg",
                    title: "情迷博物馆",
                    desc: "穿梭时光岁月寻找答案"
                },
                {
                    id: "005",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/source/1505/6f/2711e071838590.jpg_r_640x214_8f1ad9a1.jpg",
                    title: "戏水清凉一夏",
                    desc: "夏日戏水，玩“乐”无穷"
                }
            ]
        };
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recomment-title {
    background: #eeeeee;
    line-height: 0.6rem;
    text-indent: 0.2rem;
}

.recomment-item {
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.1%;
}

.item-img {
    width: 100%;
}

.item-info {
    padding-left: 0.2rem;
}

.item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
}

.item-desc {
    line-height: 0.4rem;
    color: #cccccc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
