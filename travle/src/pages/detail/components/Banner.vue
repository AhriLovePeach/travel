<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-numer">
                    <span class="iconfont banner-icon">&#xe6e5;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <!-- 幻灯片 -->
        <fide-animation>
            <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
        </fide-animation>
    </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FideAnimation from "common/fide/FideAnimation";
export default {
    name: "DetailBanner",
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {
        CommonGallary: CommonGallary,
        FideAnimation: FideAnimation
    },
    data() {
        return {
            showGallary: false
        };
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true;
        },
        handleGallaryClose() {
            this.showGallary = false;
        }
    }
};
</script>
<style lang="stylus" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}

.banner-img {
    width: 100%;
}

.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-title {
    flex: 1;
    font-size: 0.32rem;
    padding: 0 0.2rem;
}

.banner-numer {
    height: 0.32rem;
    line-height: 0.32rem;
    margin-top: 0.1rem;
    margin-right: 0.1rem;
    padding: 0.05rem 0.4rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
}

.banner-icon {
    font-size: 0.24rem;
}
</style>

