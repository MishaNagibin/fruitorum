import axios from "axios"

class Api {
    constructor() {
        this._url = "https://devtwit8.ru/api/v1/page/?path="
    }

    get(url) {
        return this.request(url, "GET")
    }

    async request(url, method) {
        return new Promise((resolve, reject) => {
            axios({
                method,
                url: encodeURI(`${this._url}/${url}`),
            })
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch((e) => {
                    reject(e.response?.data)
                })
        })
    }
}

export default new Api()
