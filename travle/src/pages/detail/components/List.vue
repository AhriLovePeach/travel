<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                <span>{{item.title}}</span>
            </div>
            <div v-if="item.children" class="item-children-title">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailList",
    props: {
        list: Array
    },
    data() {
        return {};
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
}

.item-title-icon {
    position: relative;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    top: 0.07rem;
    left: 0.06rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
}

.item-children-title {
    margin-left: 0.2rem;
}
</style>

