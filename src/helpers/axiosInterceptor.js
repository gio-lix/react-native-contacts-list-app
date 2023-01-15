import axios from "axios";
import envs from "../config/envs";
import AsyncStorage from "@react-native-async-storage/async-storage";

let headers = {};

const Axios = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

Axios.interceptors.request.use(async (config) => {
   const token = await AsyncStorage.getItem("token");
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
}, (error) => {
  return Promise.reject(error);
});

export default Axios;
