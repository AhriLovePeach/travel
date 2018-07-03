<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
    name: "Deatil",
    components: {
        DetailBanner: DetailBanner,
        DetailHeader: DetailHeader
    }
};
</script>
