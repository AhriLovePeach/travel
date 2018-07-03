<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="header-fixed-left">
                    <span class="iconfont">&#xe624;</span>
                </div>
            </router-link>
            <div class="header-fixed-right">景点详情</div>
        </div>
        <div style="height: 50rem;"></div>
    </div>
</template>
<script>
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        };
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop;
            if (top > 60) {
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {
                    opacity: opacity
                };
                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
        }
    },
    activated() {
        window.addEventListener("scroll", this.handleScroll);
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
    position: fixed;
    top: 0.2rem;
    left: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 0.4rem;
    background: rgba(0, 0, 0, 0.6);
}

.header-abs-back {
    color: #ffffff;
    font-size: 0.4rem;
}

.header-fixed {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    line-height: $headerHeight;
    color: #ffffff;
    background: $bgColor;
    text-align: center;
}

.header-fixed-left {
    position: absolute;
    width: 0.64rem;
    color: #ffffff;
}

.header-fixed-right {
    flex: 1;
    text-align: center;
    font-size: 0.32rem;
}
</style>

