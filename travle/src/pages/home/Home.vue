<template>
    <div>
        <home-header></home-header>
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
import { mapState } from "vuex";
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
            lastCity: "",
            swiperList: [],
            iconsList: [],
            recommentList: [],
            weekendList: []
        };
    },
    computed: {
        ...mapState(["city"])
    },
    methods: {
        /**
         * [getHomeInfo 接收数据]
         * @param  {[type]}              [description]
         * @return {[type]}              [description]
         */
        getHomeInfo() {
            // /api/index.json 是在config下的index.js中的proxyTable字段设置的
            axios
                .get("/api/index.json?city=" + this.city)
                .then(this.getHomeInfoSuss);
        },
        getHomeInfoSuss(res) {
            const resData = res.data;
            if (resData.ret && resData.data) {
                this.swiperList = resData.data.swiperList;
                this.iconsList = resData.data.iconsList;
                this.recommentList = resData.data.recommentList;
                this.weekendList = resData.data.weekendList;
            }
        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated() {
        if (this.lastCity !== this.city) {
            this.getHomeInfo();
            this.lastCity = this.city;
        }
    }
};
</script>
<style lang="stylus" scoped>
</style>



