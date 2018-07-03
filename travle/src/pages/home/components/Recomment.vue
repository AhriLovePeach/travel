<template>
    <div>
        <h2 class="recomment-title">猜你喜欢</h2>
        <ul>
            <router-link tag="li" class="recomment-item border-bottom" v-for="item in recommentList" :key="item.id" :to="'/detail/'+item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button" :data-indexId="item.id">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HomeRecomment",
    props: {
        recommentList: Array
    },
    data() {
        return {};
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
