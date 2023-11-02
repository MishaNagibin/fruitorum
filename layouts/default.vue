<template lang="pug">
Header
NuxtPage
Footer
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lobster&family=Marck+Script&family=Montserrat:ital,wght@0,400;0,800;1,300&family=Roboto&family=The+Nautigal:wght@700&display=swap");

body {
    font-family: Montserrat;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
}

.container {
    max-width: 1340px;
    width: 100%;
    margin: 0 auto;
}

html {
    height: 100%;
}

*::-webkit-scrollbar-thumb {
    background: #0000003d;
    border-radius: 100px;
}

*::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

*::-webkit-scrollbar-thumb:active,
*::-webkit-scrollbar-thumb:hover {
    background: #0000007a;
}

#__nuxt {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100%;
}
</style>
