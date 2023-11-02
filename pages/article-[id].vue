<script setup>
const mainStore = useMainStore(),
    route = useRoute(),
    id = route.params.id,
    article = computed(() => mainStore.data.article)

if (article.value === undefined || article.value.meta.slug !== route.path.slice(1)) {
    await mainStore.methods.getArticle(id)
}

const data = reactive({
        metaTitle: article.value.meta.title,
        metaDescription: article.value.meta.description,
        items: article.value.body,
    }),
    items = article.value.body || []

useSeoMeta({
    title: data.metaTitle,
    ogTitle: data.metaTitle,
    description: data.metaDescription,
    ogDescription: data.metaDescription,
})
</script>

<template lang="pug">
div.article.container
    template(v-for="item of data.items")
        div(v-if="item.type === 'text_block'" v-html="item.data" class="text-block")
        ImageBlock(v-else-if="item.type === 'image_block'" :item="item.data")
        Slider(v-else-if="item.type === 'slider_block'" :items="item.data")
        IntroBlock(v-else-if="item.type === 'article_intro_block'" :item="item.data")
        SubscriptionForm(v-else-if="item.type === 'subscribe_form_block'")
        ArticleList(v-else-if="item.type === 'article_list_block'" :title="item.data.title" :items="item.data.articles")
        FormBlock(v-else-if="item.type === 'cta_form_block'")
</template>

<style lang="scss" scoped>
.article {
    margin-top: 30px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media screen and (max-width: 660px) {
        gap: 50px;
        margin-bottom: 100px;
    }

    @media screen and (max-width: 440px) {
        gap: 25px;
        margin-bottom: 50px;
    }

    & > :deep(.text-block) {
        font-size: 18px;
        line-height: 26px;
        color: map-get($base, main);
        max-width: 884px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media screen and (max-width: 550px) {
            font-size: 14px;
            line-height: 24px;
        }

        & > p {
            margin: 0;
        }

        & > h2 {
            font-size: 34px;
            font-weight: 800;
            line-height: 46px;
            margin: 0;
            margin-bottom: 30px;

            @media screen and (max-width: 660px) {
                font-size: 24px;
                line-height: 36px;
                margin-bottom: 15px;
            }
        }

        &:last-of-type {
            & > h2 {
                font-size: 22px;
                line-height: 30px;
                margin-bottom: 14px;
            }
        }

        & > ul {
            list-style: none;
            margin: 0 auto;
            padding: 0;
            width: fit-content;
            display: flex;
            flex-direction: column;
            gap: 5px;

            & > li {
                width: fit-content;

                &::before {
                    content: "\25C6";
                    margin-right: 0.5em;
                }
            }
        }

        & > blockquote {
            font-size: 18px;
            font-style: italic;
            font-weight: 300;
            line-height: 26px;
            position: relative;
            padding-left: 116px;
            margin-left: 0;
            margin-right: 0;

            & > footer {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                color: map-get($neutral, 100);
            }

            &::before {
                content: "";
                position: absolute;
                left: 0;
                width: 80px;
                height: 64px;
                background-image: url("/quotes.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }

            @media screen and (max-width: 550px) {
                font-size: 14px;
                line-height: 24px;
                padding-left: 58px;

                &::before {
                    width: 40px;
                    height: 32px;
                }
            }
        }
    }
}
</style>
