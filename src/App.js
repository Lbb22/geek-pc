import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import PrivateRoute from "components/PrivateRoute";
import history from "utils/history";

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          {/* 路由的重定向 */}
          <Redirect exact from="/" to="/home" />
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/home" component={Layout}></PrivateRoute>
          {/* 增加一个404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}
