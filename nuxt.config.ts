export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@pinia/nuxt"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "/assets/scss/index.scss" as *;',
                },
            },
        },
    },
})
