import React, { Component } from "react";
import styles from "./index.module.scss";
import { Layout, Menu, message, Popconfirm } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import removeToken from "utils/request";
import {
  LogoutOutlined,
  HomeOutlined,
  HddOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Home from "pages/Home";
import ArticleList from "pages/ArticleList";
import ArticlePubilsh from "pages/ArticlePublish";
import { getUserProfile } from "api/user";

const { Header, Content, Sider } = Layout;

export default class LayoutComponent extends Component {
  state = {
    profile: {},
  };
  render() {
    // const location = useLocation();
    // const selectedKey = location.pathname;
    return (
      <div className={styles.layout}>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <div className="profile">
              <span>{this.state.profile.name}</span>
              <span>
                {" "}
                <Popconfirm
                  title="是否确定退出系统?"
                  onConfirm={this.onConfirm}
                  okText="确定"
                  cancelText="取消"
                >
                  <LogoutOutlined></LogoutOutlined> 退出
                </Popconfirm>
              </span>
            </div>
          </Header>
          <Layout>
            <Sider width={200}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[this.props.location.pathname]}
                // selectedKeys={[selectedKey]}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
              >
                <Menu.Item icon={<HomeOutlined />} key="/home">
                  <Link to="/home">数据概览</Link>
                </Menu.Item>
                <Menu.Item icon={<HddOutlined />} key="/home/list">
                  <Link to="/home/list">内容管理</Link>
                </Menu.Item>
                <Menu.Item icon={<EditOutlined />} key="/home/publish">
                  <Link to="/home/publish">发布文章</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "24px" }}>
              <Content className="site-layout-background">
                <Switch>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/home/list" component={ArticleList}></Route>
                  <Route
                    path="/home/publish"
                    component={ArticlePubilsh}
                  ></Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }

  async componentDidMount() {
    const res = await getUserProfile();
    this.setState({
      profile: res.data,
    });
  }

  //退出系统
  onConfirm = () => {
    console.log("点击了");
    //移除token
    removeToken();
    //跳转到登录页
    this.props.history.push("/login");
    //提示消息
    message.success("退出成功");
  };
}
