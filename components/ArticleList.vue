<script setup>
const props = defineProps(["title", "items"])
</script>

<template lang="pug">
div.article-list
    span.title(v-if="title !== undefined") {{ title }}
    div.items
        ArticleCard(v-for="item of items" :item="item")
</template>

<style lang="scss" scoped>
.article-list {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 30px 0;

    @media screen and (max-width: 660px) {
        gap: 25px;
    }

    & > .title {
        color: map-get($base, main);
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;

        @media screen and (max-width: 660px) {
            font-size: 24px;
            line-height: 36px;
        }
    }

    & > .items {
        display: flex;
        gap: 29px;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
