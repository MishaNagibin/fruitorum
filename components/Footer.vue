<template lang="pug">
div.footer
    div.container 
        div.info
            div.desc
                img(src="/logo.svg" height="32px" width="133.007px")
                span Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            div.social
                div.mail
                    span email
                    NuxtLink(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
                div.icons
                    each icon in ["facebook", "vk", "instagram", "telegram"]
                        img(src=`/${icon}.svg` height="30px" width="30px")
        SubscriptionForm
</template>

<style lang="scss" scoped>
.footer {
    margin-top: auto;
    border-top: 1px solid map-get($neutral, 100);
    height: 332px;
    width: 100%;

    @media screen and (max-width: 674px) {
        height: auto;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 70px;
        padding-top: 50px;
        box-sizing: border-box;

        @media screen and (max-width: 604px) {
            padding-top: 25px;
            gap: 35px;
        }

        & > .info {
            max-width: 1262px;
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 604px) {
                flex-wrap: wrap;
                justify-content: center;
                gap: 30px;

                & > .desc {
                    align-items: center;
                    text-align: center;
                }
            }

            & > .desc {
                display: flex;
                flex-direction: column;
                gap: 20px;
                color: map-get($neutral, 100);
                max-width: 426px;
                line-height: 20px;
                font-size: 14px;
            }

            & > .social {
                display: flex;
                flex-direction: column;
                gap: 24px;

                & > .mail {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;

                    & > span {
                        color: map-get($neutral, 100);
                        line-height: 20px;
                        font-size: 14px;
                    }

                    & > a {
                        text-decoration: none;
                        color: map-get($base, main);
                        font-family: Ubuntu;
                        font-size: 18px;
                        line-height: 22px;
                    }
                }

                & > .icons {
                    display: flex;
                    gap: 20px;
                    width: fit-content;

                    & > img {
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>
