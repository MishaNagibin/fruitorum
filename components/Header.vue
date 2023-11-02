<template lang="pug">
div.header
    NuxtLink(href="/")
        img(src="/logo.svg" @click="navigateTo('/')")
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85px;

    & > a {
        text-decoration: none;
    }
}
</style>
