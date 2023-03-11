import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { hasToken } from "utils/storage";

export default class AuthRoute extends Component {
  render() {
    //把接收到的component属性改成用render渲染
    //...rest：解构的剩余参数
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (hasToken()) {
            return <Component {...props}></Component>;
          } else {
            //如果没有taken，没有登录，渲染Redirect组件跳转到login
            console.log(hasToken());
            return <Redirect to="/login"></Redirect>;
          }
        }}
      ></Route>
    );
  }
}
