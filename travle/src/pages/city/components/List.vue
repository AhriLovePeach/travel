<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <ul class="button-list">
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <ul class="button-list">
                    <li class="button-warpper">
                        <div class="button">北京</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">上海</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">深圳</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">成都</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">广州</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">大连</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">张家界</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">香港</div>
                    </li>
                    <li class="button-warpper">
                        <div class="button">澳门</div>
                    </li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿坝藏族羌族自治州</li>
                    <li class="item border-bottom">阿克苏地区</li>
                    <li class="item border-bottom">阿拉尔</li>
                    <li class="item border-bottom">阿勒泰</li>
                    <li class="item border-bottom">阿拉善盟</li>
                    <li class="item border-bottom">澳门</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name: "CityList",
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper);
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
}

.title {
    line-height: 0.7rem;
    background: #f9f9f9;
    padding-left: 0.2rem;
    font-size: 0.26rem;
}

.button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
}

.button-warpper {
    float: left;
    width: 33.33%;
}

.button {
    margin: 0.1rem;
    padding: 0.1rem 0;
    text-align: center;
    border: 0.02rem solid #ccc;
    border-radius: 0.06rem;
    ellipsis();
}

.item-list >.item {
    line-height: 0.7rem;
    padding-left: 0.2rem;
}
</style>