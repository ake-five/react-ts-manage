import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import type { MenuProps } from "antd";
const Funcom: React.FC = () => {
    const items2: MenuProps["items"] = ["Countdown"].map((icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: icon,
        };
    });
    return (
        <Layout>
            <Sider width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                    items={items2}
                />
            </Sider>
            <div style={{ height: "100%", padding: "0 16px", width: "100%" }}>
                <Content
                    style={{ height: "100%", padding: "0 16px" }}
                ></Content>
            </div>
        </Layout>
    );
};

export default Funcom;
