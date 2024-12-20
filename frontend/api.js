import axios from "axios";
import { store } from "./src/App";

const getToken=()=>{
    const state=store.getState()
    return state.user.token
}

const api=axios.create({
    baseURL:"https://note-book-api-1ijj.onrender.com/api/"
})

api.interceptors.request.use(
    config=>{
        const token=getToken()

        if(token){
            config.headers["Authorization"]=token
        }
        return config
    }
)

export default api
