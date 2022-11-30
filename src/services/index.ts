import axios from 'axios'

const BASE_URL = "https://tqfe-develop.herokuapp.com/ce/"

const api = axios.create({
  baseURL: BASE_URL,
});

api.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_TOKEN

export default api
