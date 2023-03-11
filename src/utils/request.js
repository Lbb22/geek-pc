import { message } from "antd";
import axios from "axios";
import { getToken, hasToken, removeToken } from "./storage";
import history from "./history";

const instance = axios.create({
  baseURL: "http://geek.itheima.net/v1_0/",
  timeout: 5000,
});

//添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    if (hasToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
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
    //对token过期进行统一处理
    if (error.response.status === 401) {
      //代表token过期了
      //1.删除token
      removeToken();
      //2.给提示消息
      message.warning("登陆消息过期了", 1);
      //3.跳转到登录页  难点：在非组件中 无法使用Redirect 也无法访问到history对象
      history.push("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
