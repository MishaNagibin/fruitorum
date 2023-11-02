<script setup>
const props = defineProps(["item"])
</script>

<template lang="pug">
div.image-block
    img(:src="item.src" :alt="item.caption")
    div.text(v-if="item.text !== undefined" v-html="item.text")
</template>

<style lang="scss" scoped>
.image-block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;

    & > img {
        max-height: 550px;
        width: 100%;
        height: 100%;
        border-radius: 2px 220px 2px 2px;

        @media screen and (max-width: 550px) {
            border-top-right-radius: 110px;
        }
    }

    & > .text {
        color: map-get($neutral, 100);
        text-align: right;
        font-size: 14px;
        line-height: 20px;
        max-width: 198px;
    }
}
</style>
