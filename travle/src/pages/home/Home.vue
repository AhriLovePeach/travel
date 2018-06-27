<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-recomment :recommentList="recommentList"></home-recomment>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecomment from "./components/Recomment";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
    name: "Home",
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
        HomeRecomment: HomeRecomment,
        HomeWeekend: HomeWeekend
    },
    data() {
        return {
            city: "",
            swiperList: [],
            iconsList: [],
            recommentList: [],
            weekendList: []
        };
    },
    methods: {
        /**
         * [getHomeInfo 接受数据]
         * @param  {[type]}              [description]
         * @return {[type]}              [description]
         */
        getHomeInfo() {
            // /api/index.json 是在config下的index.js中的proxyTable字段设置的
            axios.get("/api/index.json").then(this.getHomeInfoSuss);
        },
        getHomeInfoSuss(res) {
            const resData = res.data;
            if (resData.ret && resData.data) {
                this.city = resData.data.city;
                this.swiperList = resData.data.swiperList;
                this.iconsList = resData.data.iconsList;
                this.recommentList = resData.data.recommentList;
                this.weekendList = resData.data.weekendList;
            }
            console.log(resData);
        }
    },
    mounted() {
        this.getHomeInfo();
    }
};
</script>
<style lang="stylus" scoped>
</style>



