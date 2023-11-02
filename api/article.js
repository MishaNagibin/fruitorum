import api from "@/utils/api"

function get(id) {
    return api.get(`article-${id}`)
}

export default {
    get,
}
