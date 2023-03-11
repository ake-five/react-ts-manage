import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb, MenuProps } from "antd";
import menus from "./mens";
const { Header, Content, Footer } = Layout;
import "./layout.css";
export default function Index(props:any) {
    const naviagtor = useNavigate();
    const onClick: MenuProps["onClick"] = (e: any) => {
        if (e.key) {
            naviagtor(`/${e.key}`);
        }
    };
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    onClick={onClick}
                    theme="dark"
                    mode="horizontal"
                    items={menus}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Layout</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                React Vite components
            </Footer>
        </Layout>
    );
}
