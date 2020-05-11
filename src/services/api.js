import axios from 'axios';

const api = axios.create({
  baseURL: 'https://br24-teste-api.herokuapp.com/controller',
});

export default api;
