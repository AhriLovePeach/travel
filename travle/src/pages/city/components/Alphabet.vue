<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name: "CityAlphabet"
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