import article from "@/api/article"
import home from "@/api/home"

export const useMainStore = defineStore("main", () => {
    const data = reactive({
            home: undefined,
            article: undefined,
        }),
        methods = {
            getHome: async () => {
                await home.get().then((response) => {
                    data.home = response
                })
            },
            getArticle: async (id) => {
                await article.get(id).then((response) => {
                    data.article = response
                })
            },
        }
    return { data, methods }
})
