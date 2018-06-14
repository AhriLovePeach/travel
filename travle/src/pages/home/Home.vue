<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recomment></home-recomment>
        <home-weekend></home-weekend>
        <div>asdasd</div>
    </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecomment from "./components/Recomment";
import HomeWeekend from "./components/Weekend";
export default {
    name: "Home",
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
        HomeRecomment: HomeRecomment,
        HomeWeekend: HomeWeekend
    }
};
</script>
<style lang="stylus" scoped>
</style>



