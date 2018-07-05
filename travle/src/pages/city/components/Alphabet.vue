<template>
    <ul class="list">
        <li v-for="item in letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" class="item">{{item}}</li>
    </ul>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        };
    },
    updated() {
        this.startY = this.$refs["A"][0].offsetTop;
    },
    computed: {
        // 地域的首字母数组
        letters() {
            const letters = [];
            const cities = this.cities;
            for (const i in cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        /**
         * @handleLetterClick 获取点击的是哪个字母数据
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        handleLetterClick(e) {
            this.$emit("change", e.target.innerText);
        },
        /**
         * @handleTouchStart 开始监听拖动区域字母的时候地域跟着改变的状态值
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        handleTouchStart() {
            this.touchStatus = true;
        },
        /**
         * @handleTouchMove 拖动的时候监听拖动区域字母的时候地域跟着改变
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        handleTouchMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const touchY = e.targetTouches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change", this.letters[index]);
                    }
                }, 16);
            }
        },
        /**
         * @handleTouchEnd 结束监听拖动区域字母的时候地域跟着改变的状态值
         * @author zf
         * @date 2018-06-27
         * @param {*} params
         */
        handleTouchEnd() {
            this.touchStatus = false;
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
}

.item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
}
</style>