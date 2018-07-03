<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201310/22/951dc8fa276686d8c8d65eac.jpg_350x240_90d0dad9.jpg" />
            <div class="banner-info">
                <div class="banner-title">上海野生动物园(AAAAA景区)</div>
                <div class="banner-numer">
                    <span class="iconfont banner-icon">&#xe6e5;</span> 26</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
    name: "DetailBanner",
    components: {
        CommonGallary: CommonGallary
    },
    data() {
        return {
            showGallary: false,
            imgs: [
                "http://img1.qunarzz.com/sight/p0/201310/22/951dc8fa276686d8c8d65eac.jpg_r_800x800_58b26173.jpg",
                "http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_r_800x800_15271965.jpg",
                "http://img1.qunarzz.com/sight/p0/201405/15/4b16c55b620218c786d0ed33e92b8b80.jpg_r_800x800_dbb543d6.jpg"
            ]
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
    margin-top: 0.14rem;
    padding: 0 0.4rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
}

.banner-icon {
    font-size: 0.24rem;
}
</style>

