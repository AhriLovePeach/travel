<template>
    <div>
        <h2 class="recomment-title">猜你喜欢</h2>
        <ul>
            <li class="recomment-item border-bottom" v-for="item in recommentList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button" :data-indexId="item.id">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HomeRecomment",
    data() {
        return {
            recommentList: [
                {
                    id: "001",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg",
                    title: "上海野生动物园",
                    desc:
                        "这里有漂亮的鸳鸯在水中成双成对的游着，等待着游人发现他们的甜蜜。"
                },
                {
                    id: "002",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg",
                    title: "上海影视乐园",
                    desc:
                        "看着这种款式的公交车，还以为自己穿越到了民国。大上海风情在这里可以展现的淋漓尽致。"
                },
                {
                    id: "003",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg",
                    title: "上海海洋水族馆",
                    desc:
                        "海豹缸，其半弧形亚克力缸体构造是水族馆另一个独一无二的设计。在这里您可以同四只可爱的斑海豹近距离的“接触”。"
                },
                {
                    id: "004",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/p0/1507/b3/b33a7caa457c0a52.img.jpg_200x200_fe73bd81.jpg",
                    title: "东方明珠空中旋转餐厅",
                    desc:
                        "塔顶有大型旋转餐厅，集就餐与观赏功能于一体，让吃饭不再单调！"
                },
                {
                    id: "005",
                    imgUrl:
                        "http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_200x200_f22705c9.jpg",
                    title: "上海科技馆",
                    desc:
                        "占地面积6.8万多平方米，建筑面积9.8万平方米，分为11个风格各异的主题展区、4个高科技特种影院、3个古今中外科学家及其足迹的艺术长廊、2个主题特展和若干个临时展厅。"
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
    display: flex;
    overflow: hidden;
    height: 2.2rem;
    padding: 0.2rem;
}

.item-img-wrapper {
    width: 2rem;
    height: 2rem;
}

.item-img {
    width: 100%;
}

.item-info {
    flex: 1;
    padding-left: 0.2rem;
    min-width: 0;
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

.item-button {
    margin-top: 0.15rem;
    line-height: 0.44rem;
    background: #ff9300;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    color: #ffffff;
}
</style>
