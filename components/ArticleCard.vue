<script setup>
const props = defineProps(["item"])
</script>

<template lang="pug">
div.article-card
    img(:src="item.image")
    span {{ item.title }}
    NuxtLink(:href="item.link")
        Button="Читать"
</template>

<style lang="scss" scoped>
.article-card {
    display: flex;
    flex-direction: column;
    max-width: 427px;
    width: 100%;
    max-height: 476px;
    flex-shrink: 0;
    height: auto;

    & > img {
        max-width: 427px;
        max-height: 320px;
        width: 100%;
        height: 100%;
    }

    & > span {
        display: -webkit-box;
        margin-top: 20px;
        margin-bottom: 30px;
        overflow: hidden;
        color: map-get($base, main);
        text-overflow: ellipsis;
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        @media screen and (max-width: 364px) {
            font-size: 18px;
            line-height: 26px;
            margin-top: 10px;
            margin-bottom: 15px;
        }
    }

    & > a {
        text-decoration: none;
        color: map-get($base, main);

        @media screen and (max-width: 660px) {
            margin: 0 auto;
        }
    }
}
</style>
