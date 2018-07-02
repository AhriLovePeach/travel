<template>
    <div>
        <div class="search">
            <input v-model="keyWorld" class="search-input" type="text" name="" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="searchWrapper" v-show="keyWorld">
            <ul>
                <li @click="handleCityClick(item.name)" class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li v-show="hasNoData" class="search-item text-center border-bottom">没有您所搜索的城市</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
    name: "CitySearch",
    props: {
        cities: Object
    },
    data() {
        return {
            keyWorld: "",
            list: [],
            timer: null
        };
    },
    computed: {
        hasNoData() {
            return !this.list.length;
        }
    },
    watch: {
        keyWorld() {
            let cities = this.cities;
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in cities) {
                    cities[i].forEach(value => {
                        if (
                            value.spell.indexOf(this.keyWorld) > -1 ||
                            value.name.indexOf(this.keyWorld) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        }
    },
    methods: {
        handleCityClick(city) {
            // this.$store.dispatch("changeCity", city);
            this.changCity(city);
            this.$router.push("/");
        },
        ...mapMutations(["changeCity"])
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.searchWrapper);
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
    height: 0.72rem;
    padding: 0 0.1rem;
    background: $bgColor;
}

.search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
}

.search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eeeeee;
}

.search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #ffffff;
}

.text-center {
    text-align: center;
}
</style>