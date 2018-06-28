<template>
    <div>
        <div class="search">
            <input v-model="keyWorld" class="search-input" type="text" name="" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
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
    background-color: red;
}
</style>