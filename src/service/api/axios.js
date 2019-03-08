import Axios from 'axios'

// See https://github.com/santiago86/characters-api
export const URL_API_MONGO = "http://localhost:8000/"

export default {
    characters: {
        fecthAll: () => Axios.get(URL_API_MONGO + "api/character")
            .then(res => res.data),
        create: character => Axios.post(URL_API_MONGO + "api/character", { character }).then(res => res.data),
    }
}