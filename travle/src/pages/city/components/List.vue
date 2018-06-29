<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <ul class="button-list">
                    <li class="button-warpper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <ul class="button-list">
                    <li @click="handleCityClick(item.name)" v-for="item of hotCities" :key="item.id" class="button-warpper">
                        <div class="button">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li @click="handleCityClick(inneritem.name)" v-for="inneritem of item" :key="inneritem.id" class="item border-bottom">{{inneritem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name: "CityList",
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element, 500);
            }
        }
    },
    methods: {
        handleCityClick(city) {
            this.$store.dispatch("changeCity", city);
            this.$router.push("/");
        }
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