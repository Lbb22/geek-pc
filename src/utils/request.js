import axios from "axios";

const instance = axios.create({
  baseURL: "http://geek.itheima.net/v1_0/",
  timeout: 5000,
});

//添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    //在发送请求前做些什么
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
