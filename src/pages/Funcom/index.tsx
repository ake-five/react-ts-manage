import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
const Funcom: React.FC = () => {
    const items2: MenuProps["items"] = [
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
    ].map((icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (
        <Layout >
            <Sider width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                    items={items2}
                />
            </Sider>
            <Content style={{ height: "100%" }}>Content</Content>
        </Layout>
    );
};

export default Funcom;
