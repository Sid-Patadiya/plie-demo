import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URI = 'http://3.7.81.243/projects/plie-api/public/api/';

const api = axios.create({
  timeout: 15000,
  baseURL: BASE_URI,
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
  async config => {
    const authToken = await AsyncStorage.getItem('token');
    console.log('file: api.js:15 ~ authToken', authToken);
    if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  error => {
    console.log('file: api.js:20 ~ error', error);
    return Promise.reject(error.res);
  },
);

export default api;
