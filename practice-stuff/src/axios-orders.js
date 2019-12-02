import axios from "axios"

const instance = axios.create({
    baseURL: "https://burger-builder-1c97e.firebaseio.com/"
})

export default instance