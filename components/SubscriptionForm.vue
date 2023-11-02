<script setup>
const data = reactive({
    email: "",
})
</script>

<template lang="pug">
div.subscription-form
    span.title="Подпишись на рассылку"
    form
        Input(v-model="data.email" placeholder="Email")
        Button(mode="primary" type="submit") Подписаться
</template>

<style lang="scss" scoped>
.subscription-form {
    display: flex;
    max-width: 1340px;
    width: 100%;
    height: 100px;
    border-radius: 2px;
    background-color: map-get($base, main);
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
        padding: 15px 30px;
    }

    @media screen and (max-width: 674px) {
        height: auto;
        justify-content: center;
        gap: 20px;
    }

    & > .title {
        color: map-get($neutral, 10);
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;

        @media screen and (max-width: 364px) {
            font-size: 18px;
            line-height: 26px;
        }
    }

    & > form {
        display: flex;
        align-items: flex-end;
        gap: 37px;
        flex-wrap: wrap;

        @media screen and (max-width: 674px) {
            justify-content: center;
        }
    }
}
</style>
