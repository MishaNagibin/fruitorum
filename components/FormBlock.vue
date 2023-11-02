<script setup>
const data = reactive({
    name: "",
    phone: "",
    email: "",
})
</script>

<template lang="pug">
.form-block
    img(src="/form-image.png")
    form
        h1 Стань участником проекта
        div
            Input(v-model="data.name" placeholder="Имя")
            Input(v-model="data.phone" placeholder="Телефон" type="tel")
            Input(v-model="data.email" placeholder="Email")
        Button(mode="primary" type="submit") Присоединиться
</template>

<style lang="scss" scoped>
.form-block {
    max-width: 1340px;
    width: 100%;
    flex-wrap: wrap;
    flex-shrink: 0;
    background-color: map-get($base, main);
    padding: 60px;
    box-sizing: border-box;
    display: flex;
    gap: 60px;

    @media screen and (max-width: 1283px) {
        justify-content: center;
    }

    @media screen and (max-width: 550px) {
        padding: 30px;
        gap: 30px;
    }

    @media screen and (max-width: 364px) {
        padding: 15px;
        gap: 15px;
    }

    & > img {
        max-width: 595px;
        max-height: 326px;
        width: 100%;
        height: 100%;
    }

    & > form {
        display: flex;
        flex-direction: column;
        gap: 50px;

        @media screen and (max-width: 1283px) {
            align-items: center;
        }

        @media screen and (max-width: 550px) {
            gap: 25px;
        }

        & > h1 {
            color: map-get($neutral, 10);
            font-size: 34px;
            font-weight: 800;
            line-height: 46px;
            margin: 0;

            @media screen and (max-width: 630px) {
                font-size: 24px;
                line-height: 36px;
            }

            @media screen and (max-width: 384px) {
                font-size: 20px;
                line-height: 28px;
            }

            @media screen and (max-width: 364px) {
                font-size: 18px;
                line-height: 26px;
            }
        }

        & > div {
            display: flex;
            flex-direction: column;
            gap: 25px;

            @media screen and (max-width: 550px) {
                width: 100%;
            }
        }
    }
}
</style>
