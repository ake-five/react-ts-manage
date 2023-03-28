import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import menus from "./mens";
const { Content, Footer, Sider } = Layout;
import Header from "@/components/Header";
import "./layout.css";
export default function Index() {
    const naviagtor = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const onClick: MenuProps["onClick"] = (e: any) => {
        if (e.key) {
            naviagtor(`/${e.key}`);
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                {collapsed ? (
                    <div className="layout-container">React.vite</div>
                ) : (
                    <div className="layout-container">
                        欢迎登录 React.vite 练习项目
                    </div>
                )}

                <Menu
                    theme="dark"
                    defaultSelectedKeys={[location?.pathname.replace("/", "")]}
                    mode="inline"
                    items={menus}
                    onClick={onClick}
                />
            </Sider>
            <Layout className="site-layout">
                <Header />
                <Content style={{ margin: "16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ height: "100%" }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    react vite components
                </Footer>
            </Layout>
        </Layout>
    );
}
