import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-cadastro-usuarios-gok6.vercel.app'
})

export default api