//用于封装所有的localStorage的操作
const TOKEN_KEY = "Token-geek-pc";

/**
 * 保存token
 * @param {*} token
 */
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

/**
 * 获取token
 * @returns
 */
export const getToken = () => localStorage.getItem(TOKEN_KEY);

/**
 *
 * @returns 移除token
 */
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

/**
 * 判断是否有token
 * @returns
 */
export const hasToken = () => !!getToken();
