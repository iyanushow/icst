import axios from 'axios'

const BASE_URL = "https://tqfe-develop.herokuapp.com/ce/"

const api = axios.create({
  baseURL: BASE_URL,
});

api.defaults.headers.common['Authorization'] = "Token f3b715a18390d3097123869f63b14f1cdd8e4df0"

export default api
