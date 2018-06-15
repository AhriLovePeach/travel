<template>
    <div>
        <h2 class="recomment-title">周末去哪儿</h2>
        <ul>
            <li class="recomment-item" v-for="item in weekendList" :key="item.id">
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
    props: ['weekendList'],
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
