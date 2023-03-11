import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { hasToken } from "utils/storage";

export default class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(routeProps) => {
          if (hasToken()) {
            return <Component {...routeProps}></Component>;
          } else {
            //跳转到登录页面的时候 我们需要把当前的地址传过去
            //如果没有taken，没有登录，渲染Redirect组件跳转到login
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  //   search: "?from=" + routeProps.location.pathname,
                  state: {
                    from: routeProps.location.pathname,
                  },
                }}
              ></Redirect>
            );
          }
        }}
      ></Route>
    );
  }
}
