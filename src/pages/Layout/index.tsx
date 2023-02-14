import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import "@/styles/layout/layout.css";
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    // useEffect(() => {
    //     if (!cookies.load("token")) {
    //         navigate("/login");
    //     }
    // });
    const onclickMenuItem: MenuProps["onClick"] = ({ key }) => {
        console.log(key);
    };
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="vertical"
                    defaultSelectedKeys={["/index"]}
                    onClick={onclickMenuItem}
                    items={[
                        {
                            key: "/index",
                            icon: <UserOutlined />,
                            label: "示例组件",
                            title: "示例组件",
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
