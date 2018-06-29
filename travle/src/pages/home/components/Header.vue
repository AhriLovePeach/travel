<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input iconfont">
            <span class="iconfont">&#xe632;</span>
            <input type="text" name="" id="" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link to="/city">
            <div class="header-right">
                <span class="header-right-city">{{this.city}}</span>
                <span class="iconfont">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "HomeHeader",
    computed: {
        ...mapState(["city"])
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.header {
    display: flex;
    line-height: $headerHeight;
    color: #ffffff;
    background: $bgColor;
    text-align: center;
}

.header-left {
    width: 0.64rem;
}

.header-input {
    flex: 1;
    margin: 0.12rem 0.2rem;
    padding-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: left;
    background: #ffffff;
    color: #cccccc;
    border-radius: 0.1rem;
}

.header-right {
    padding: 0 0.1rem;
    color: #ffffff;
}

.header-right-city {
    width: 1.24rem;
}
</style>


