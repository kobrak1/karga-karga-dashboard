import axios from 'axios'
const baseUrl = 'https://api.management.parse25proje.link/api/auth/login'

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }