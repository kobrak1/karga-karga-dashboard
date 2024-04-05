import axios from 'axios'
const baseUrl = 'https://api.management.parse25proje.link/api/tasks'

let token
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

// create method
const create = async (newObject) => {
    const config = {
        headers: { Authorization: token }
    }

    const request = await axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}

export default { setToken, create }