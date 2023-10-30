import axios from "axios";
import { getContentType } from "../ApiHelper";
import { getAccessToken } from "../../AuthSlice/AuthHelper";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: getContentType(),
});

instance.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Token ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use((data) => {
    
  return data;
  },
  (error) => {
    console.log("interceptor error");
    return error;
  }
);

export const instanceSecond = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_SECOND,
  headers: getContentType()
})

instanceSecond.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken()
  if(accessToken){
    config.headers.Authorization = `Token ${accessToken}`
  }
  return config
}, (error) => {
  console.log('interceptor2 error');
  return Promise.reject(error)
})

instanceSecond.interceptors.response.use((data) => {
  return data
}, (error) => {
  console.log('interceptor2 error');
  return Promise.reject(error)
})