<script setup>
let currentImageIndex = ref(0)
const props = defineProps(["items"]),
    methods = {
        nextSlide() {
            currentImageIndex.value = (currentImageIndex.value + 1) % props.items.length
        },
        prevSlide() {
            currentImageIndex.value = (currentImageIndex.value - 1 + props.items.length) % props.items.length
        },
    }
</script>

<template lang="pug">
div.slider
    div.slider-container
      span(class="icon prev" @click="methods.prevSlide")
      img(:src="items[currentImageIndex]" alt="slide")
      span(class="icon next" @click="methods.nextSlide")
    div.slider-controls
      span {{ currentImageIndex + 1 }} / {{ items.length }}
</template>

<style lang="scss" scoped>
.slider {
    text-align: center;

    & > .slider-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        overflow: hidden;

        & > .icon {
            cursor: pointer;
            display: block;
            min-width: 60px;
            height: 60px;

            @media screen and (max-width: 550px) {
                min-width: 30px;
                height: 30px;
                background-size: contain;
            }
        }

        & > .prev {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMC45OTk5OTlDMCAwLjQ0NzcxNCAwLjQ0NzcxNSAwIDEgMEg1OUM1OS41NTIzIDAgNjAgMC40NDc3MTUgNjAgMVY1OUM2MCA1OS41NTIzIDU5LjU1MjMgNjAgNTkgNjBIMC45OTk5OTlDMC40NDc3MTQgNjAgMCA1OS41NTIzIDAgNTlWMC45OTk5OTlaIiBmaWxsPSIjMUIxQjFCIi8+CjxwYXRoIGQ9Ik0zMy40MzUxIDM5TDI1LjY1NjkgMzEuMjIxOEMyNS4yNjY0IDMwLjgzMTMgMjUuMjY2NCAzMC4xOTgxIDI1LjY1NjkgMjkuODA3NkwzMy40MzUxIDIyLjAyOTQiIHN0cm9rZT0iI0Q5RDlEOSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==");
        }

        & > .next {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYwIDU5QzYwIDU5LjU1MjMgNTkuNTUyMyA2MCA1OSA2MEwxIDYwQzAuNDQ3NzE2IDYwIDMuOTE0MDVlLTA4IDU5LjU1MjMgOC43NDIyOGUtMDggNTlMNS4xNTc5NGUtMDYgMC45OTk5OTVDNS4yMDYyM2UtMDYgMC40NDc3MTEgMC40NDc3MjEgLTUuMjA2MjNlLTA2IDEuMDAwMDEgLTUuMTU3OTRlLTA2TDU5IC04Ljc0MjI3ZS0wOEM1OS41NTIzIC0zLjkxNDA0ZS0wOCA2MCAwLjQ0NzcxNiA2MCAxTDYwIDU5WiIgZmlsbD0iIzFCMUIxQiIvPgo8cGF0aCBkPSJNMjYuNTY0OSAyMUwzNC4zNDMxIDI4Ljc3ODJDMzQuNzMzNiAyOS4xNjg3IDM0LjczMzYgMjkuODAxOSAzNC4zNDMxIDMwLjE5MjRMMjYuNTY0OSAzNy45NzA2IiBzdHJva2U9IiNEOUQ5RDkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=");
        }

        & > img {
            max-width: 1112px;
            height: auto;
            width: calc(100% - 150px);
            margin: 0 15px;

            @media screen and (max-width: 550px) {
                width: calc(100% - 70px);
                margin: 0 5px;
            }
        }
    }

    & > .slider-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;

        @media screen and (max-width: 550px) {
            margin-top: 15px;
        }

        & > span {
            color: map-get($base, main);
            text-align: right;
            font-size: 18px;
            line-height: 26px;
        }
    }
}
</style>
