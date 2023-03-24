import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import menus from "./mens";
const { Content, Footer, Sider } = Layout;
import Header from "@/components/Header";
import "./layout.css";
// import img from "../assets/logo";
export default function Index() {
    const [collapsed, setCollapsed] = useState(false);
    const [menuKey] = useState("home");
    const naviagtor = useNavigate();
    const onClick: MenuProps["onClick"] = (e: any) => {
        if (e.key) {
            // setmenuKey(e.key);
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
                {/* <img src={img} className="logo" /> */}
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={[menuKey]}
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
                        style={{ padding: 24, height: "100%" }}
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
