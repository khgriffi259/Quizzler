import axios from 'axios'

export const setToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

const host = 'http://localhost:4000/api'

export const call = async (method, endpoint, data) => {
    const response = await axios[method](`${host}/${endpoint}`, data)
    return response.data
}

export default { call, setToken }

