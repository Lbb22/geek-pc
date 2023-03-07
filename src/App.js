import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* 路由的重定向 */}
          <Redirect exact from="/" to="/home" />
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Layout}></Route>
          {/* 增加一个404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}
