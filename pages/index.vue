<script setup>
const mainStore = useMainStore(),
    home = computed(() => mainStore.data.home)

if (home.value === undefined) {
    await mainStore.methods.getHome()
}

const data = reactive({
    metaTitle: home.value.meta.title,
    metaDescription: home.value.meta.description,
    articles: home.value.body[0].data.articles ?? [],
})

useSeoMeta({
    title: data.metaTitle,
    ogTitle: data.metaTitle,
    description: data.metaDescription,
    ogDescription: data.metaDescription,
})
</script>

<template lang="pug">
div.container 
    div.articles
        ArticleList(:items="data.articles")
</template>

<style lang="scss" scoped>
div {
    .articles {
        display: flex;
        margin: 30px 0;
        gap: 29px;
        flex-wrap: wrap;
    }
}
</style>
