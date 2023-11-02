<script setup>
const props = defineProps(["item"])
</script>

<template lang="pug">
div.intro-block
    img(:src="item.image")
    div.text
        div.title
            h1 {{ item.title }}
            div.info
                div
                    span.icon.time
                    span {{ `${item.reading_time} мин время чтения` }}
                div
                    span.icon.eye
                    span {{ `${item.views_count} прочитали статью` }}
        span.desc {{ item.short_description }}
</template>

<style lang="scss" scoped>
.intro-block {
    display: flex;
    gap: 30px;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    & > img {
        max-width: 541px;
        height: 580px;
        width: 100%;
        border-radius: 2px 220px 2px 2px;

        @media screen and (max-width: 1000px) {
            height: 100%;
        }

        @media screen and (max-width: 550px) {
            border-top-right-radius: 110px;
        }
    }

    & > .text {
        display: flex;
        flex-direction: column;
        gap: 50px;

        @media screen and (max-width: 660px) {
            gap: 25px;
        }

        & > .title {
            display: flex;
            flex-direction: column;
            gap: 30px;

            @media screen and (max-width: 660px) {
                gap: 15px;
            }

            & > h1 {
                color: map-get($base, main);
                font-size: 56px;
                font-weight: 800;
                line-height: 66px;
                margin: 0;

                @media screen and (max-width: 1140px) {
                    font-size: 46px;
                    line-height: 56px;
                }

                @media screen and (max-width: 1040px) {
                    font-size: 30px;
                    line-height: 40px;
                }

                @media screen and (max-width: 660px) {
                    font-size: 24px;
                    line-height: 36px;
                }
            }

            & > .info {
                display: flex;
                flex-direction: column;
                gap: 4px;

                & > div {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    & > span {
                        color: map-get($neutral, 100);
                        font-size: 14px;
                        line-height: 20px;
                    }

                    & > .icon {
                        display: block;
                        width: 16px;
                        height: 16px;
                        background-color: map-get($neutral, 100);
                        &.time {
                            mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPG1hc2sgaWQ9Im1hc2swXzVfNTMwIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMSIgeT0iMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0Ij4KPHBhdGggZD0iTTcuOTk5OTQgMTMuNkMxMS4wOTI4IDEzLjYgMTMuNiAxMS4wOTI5IDEzLjYgOEMxMy42IDQuOTA3MSAxMS4wOTI4IDIuMzk5OTYgNy45OTk5NCAyLjM5OTk2QzQuOTA3MDQgMi4zOTk5NiAyLjM5OTkgNC45MDcxIDIuMzk5OSA4QzIuMzk5OSAxMS4wOTI5IDQuOTA3MDQgMTMuNiA3Ljk5OTk0IDEzLjZaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjEyMDAxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjAwMjIgNC42Mzk5N1Y4LjAwMjc5TDEwLjM3NjMgMTAuMzc3MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjEyMDAxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzVfNTMwKSI+CjxwYXRoIGQ9Ik0xLjI4MDAzIDEuMjc5OTVIMTQuNzIwMVYxNC43MkgxLjI4MDAzVjEuMjc5OTVaIiBmaWxsPSIjOEQ5NTlDIi8+CjwvZz4KPC9nPgo8L3N2Zz4K");
                            -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPG1hc2sgaWQ9Im1hc2swXzVfNTMwIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMSIgeT0iMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0Ij4KPHBhdGggZD0iTTcuOTk5OTQgMTMuNkMxMS4wOTI4IDEzLjYgMTMuNiAxMS4wOTI5IDEzLjYgOEMxMy42IDQuOTA3MSAxMS4wOTI4IDIuMzk5OTYgNy45OTk5NCAyLjM5OTk2QzQuOTA3MDQgMi4zOTk5NiAyLjM5OTkgNC45MDcxIDIuMzk5OSA4QzIuMzk5OSAxMS4wOTI5IDQuOTA3MDQgMTMuNiA3Ljk5OTk0IDEzLjZaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjEyMDAxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjAwMjIgNC42Mzk5N1Y4LjAwMjc5TDEwLjM3NjMgMTAuMzc3MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjEyMDAxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzVfNTMwKSI+CjxwYXRoIGQ9Ik0xLjI4MDAzIDEuMjc5OTVIMTQuNzIwMVYxNC43MkgxLjI4MDAzVjEuMjc5OTVaIiBmaWxsPSIjOEQ5NTlDIi8+CjwvZz4KPC9nPgo8L3N2Zz4K");
                        }

                        &.eye {
                            mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggZD0iTTcuOTk5OTYgNkM3LjQ2OTUzIDYgNi45NjA4MiA2LjIxMDcxIDYuNTg1NzUgNi41ODU3OUM2LjIxMDY3IDYuOTYwODYgNS45OTk5NiA3LjQ2OTU3IDUuOTk5OTYgOEM1Ljk5OTk2IDguNTMwNDMgNi4yMTA2NyA5LjAzOTE0IDYuNTg1NzUgOS40MTQyMUM2Ljk2MDgyIDkuNzg5MjkgNy40Njk1MyAxMCA3Ljk5OTk2IDEwQzguNTMwMzkgMTAgOS4wMzkxIDkuNzg5MjkgOS40MTQxNyA5LjQxNDIxQzkuNzg5MjUgOS4wMzkxNCA5Ljk5OTk2IDguNTMwNDMgOS45OTk5NiA4QzkuOTk5OTYgNy40Njk1NyA5Ljc4OTI1IDYuOTYwODYgOS40MTQxNyA2LjU4NTc5QzkuMDM5MSA2LjIxMDcxIDguNTMwMzkgNiA3Ljk5OTk2IDZaTTcuOTk5OTYgMTEuMzMzM0M3LjExNTkgMTEuMzMzMyA2LjI2ODA2IDEwLjk4MjEgNS42NDI5NCAxMC4zNTdDNS4wMTc4MiA5LjczMTkgNC42NjY2MyA4Ljg4NDA2IDQuNjY2NjMgOEM0LjY2NjYzIDcuMTE1OTUgNS4wMTc4MiA2LjI2ODEgNS42NDI5NCA1LjY0Mjk4QzYuMjY4MDYgNS4wMTc4NiA3LjExNTkgNC42NjY2NyA3Ljk5OTk2IDQuNjY2NjdDOC44ODQwMSA0LjY2NjY3IDkuNzMxODYgNS4wMTc4NiAxMC4zNTcgNS42NDI5OEMxMC45ODIxIDYuMjY4MSAxMS4zMzMzIDcuMTE1OTUgMTEuMzMzMyA4QzExLjMzMzMgOC44ODQwNiAxMC45ODIxIDkuNzMxOSAxMC4zNTcgMTAuMzU3QzkuNzMxODYgMTAuOTgyMSA4Ljg4NDAxIDExLjMzMzMgNy45OTk5NiAxMS4zMzMzWk03Ljk5OTk2IDNDNC42NjY2MyAzIDEuODE5OTYgNS4wNzMzMyAwLjY2NjYyNiA4QzEuODE5OTYgMTAuOTI2NyA0LjY2NjYzIDEzIDcuOTk5OTYgMTNDMTEuMzMzMyAxMyAxNC4xOCAxMC45MjY3IDE1LjMzMzMgOEMxNC4xOCA1LjA3MzMzIDExLjMzMzMgMyA3Ljk5OTk2IDNaIiBmaWxsPSIjOEQ5NTlDIi8+CjwvZz4KPC9zdmc+Cg==");
                            -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggZD0iTTcuOTk5OTYgNkM3LjQ2OTUzIDYgNi45NjA4MiA2LjIxMDcxIDYuNTg1NzUgNi41ODU3OUM2LjIxMDY3IDYuOTYwODYgNS45OTk5NiA3LjQ2OTU3IDUuOTk5OTYgOEM1Ljk5OTk2IDguNTMwNDMgNi4yMTA2NyA5LjAzOTE0IDYuNTg1NzUgOS40MTQyMUM2Ljk2MDgyIDkuNzg5MjkgNy40Njk1MyAxMCA3Ljk5OTk2IDEwQzguNTMwMzkgMTAgOS4wMzkxIDkuNzg5MjkgOS40MTQxNyA5LjQxNDIxQzkuNzg5MjUgOS4wMzkxNCA5Ljk5OTk2IDguNTMwNDMgOS45OTk5NiA4QzkuOTk5OTYgNy40Njk1NyA5Ljc4OTI1IDYuOTYwODYgOS40MTQxNyA2LjU4NTc5QzkuMDM5MSA2LjIxMDcxIDguNTMwMzkgNiA3Ljk5OTk2IDZaTTcuOTk5OTYgMTEuMzMzM0M3LjExNTkgMTEuMzMzMyA2LjI2ODA2IDEwLjk4MjEgNS42NDI5NCAxMC4zNTdDNS4wMTc4MiA5LjczMTkgNC42NjY2MyA4Ljg4NDA2IDQuNjY2NjMgOEM0LjY2NjYzIDcuMTE1OTUgNS4wMTc4MiA2LjI2ODEgNS42NDI5NCA1LjY0Mjk4QzYuMjY4MDYgNS4wMTc4NiA3LjExNTkgNC42NjY2NyA3Ljk5OTk2IDQuNjY2NjdDOC44ODQwMSA0LjY2NjY3IDkuNzMxODYgNS4wMTc4NiAxMC4zNTcgNS42NDI5OEMxMC45ODIxIDYuMjY4MSAxMS4zMzMzIDcuMTE1OTUgMTEuMzMzMyA4QzExLjMzMzMgOC44ODQwNiAxMC45ODIxIDkuNzMxOSAxMC4zNTcgMTAuMzU3QzkuNzMxODYgMTAuOTgyMSA4Ljg4NDAxIDExLjMzMzMgNy45OTk5NiAxMS4zMzMzWk03Ljk5OTk2IDNDNC42NjY2MyAzIDEuODE5OTYgNS4wNzMzMyAwLjY2NjYyNiA4QzEuODE5OTYgMTAuOTI2NyA0LjY2NjYzIDEzIDcuOTk5OTYgMTNDMTEuMzMzMyAxMyAxNC4xOCAxMC45MjY3IDE1LjMzMzMgOEMxNC4xOCA1LjA3MzMzIDExLjMzMzMgMyA3Ljk5OTk2IDNaIiBmaWxsPSIjOEQ5NTlDIi8+CjwvZz4KPC9zdmc+Cg==");
                        }
                    }
                }
            }
        }

        & > .desc {
            color: map-get($base, main);
            font-size: 18px;
            line-height: 26px;

            @media screen and (max-width: 550px) {
                font-size: 14px;
                line-height: 24px;
            }
        }
    }
}
</style>
