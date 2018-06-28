<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
    name: "City",
    components: {
        CityHeader: CityHeader,
        CitySearch: CitySearch,
        CityList: CityList,
        CityAlphabet: CityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities:{},
            letter: ''
        };
    },
    methods: {
        /**
         * @getCityInfo api获取数据
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        getCityInfo() {
            axios.get("/api/city.json").then(this.getCityInfoSucc);
        },
        /**
         * @getCityInfoSucc 处理获取的数据
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        getCityInfoSucc(res) {
            const resData = res.data;
            if (resData.ret && resData.data) {
                this.hotCities = resData.data.hotCities;
                this.cities = resData.data.cities;
                this.iconsList = resData.data.iconsList;
                this.recommentList = resData.data.recommentList;
                this.weekendList = resData.data.weekendList;
            }
        },
        /**
         * @handleLetterChange 处理接受子组件传过来的字母数据
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        handleLetterChange(letter){
            this.letter = letter;
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>
<style lang="stylus" scoped>
</style>
