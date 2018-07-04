<template>
    <div>
        <detail-banner :sightName='sightName' :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
    name: "Detail",
    components: {
        DetailBanner: DetailBanner,
        DetailHeader: DetailHeader,
        DetailList: DetailList
    },
    data() {
        return {
            lastid: "",
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            categoryList: []
        };
    },
    mounted() {
        this.lastid = this.$route.params.id;
        this.getDetailCityInfo();
    },
    activated() {
        if (this.lastid !== this.$route.params.id) {
            this.getDetailCityInfo();
            this.lastid = this.$route.params.id;
        }
    },
    methods: {
        /**
         * @getDetailCityInfo api获取数据
         * @author zf
         * @date 2018-07-4
         * @param {*} params
         */
        getDetailCityInfo() {
            axios
                .get("/api/detail.json", {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(this.getDetailCityInfoSucc);
        },
        /**
         * @getDetailCityInfoSucc 处理获取的数据
         * @author zf
         * @date 2018-07-4
         * @param {*} params
         */
        getDetailCityInfoSucc(res) {
            const data = res.data;
            if (data.ret && data.data) {
                this.sightName = data.data.sightName;
                this.bannerImg = data.data.bannerImg;
                this.gallaryImgs = data.data.gallaryImgs;
                this.categoryList = data.data.categoryList;
            }
        }
    }
};
</script>
