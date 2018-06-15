<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <span class="iconfont">&#xe624;</span>
            </div>
        </router-link>
        <div class="header-right">城市选择</div>
    </div>
</template>
<script>
export default {
    name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    display: flex;
    position: relative;
    height: $headerHeight;
    line-height: $headerHeight;
    color: #ffffff;
    background: $bgColor;
    text-align: center;
}

.header-left {
    position: absolute;
    width: 0.64rem;
    color: #ffffff;
}

.header-right {
    flex: 1;
    text-align: center;
    font-size: 0.32rem;
}
</style>