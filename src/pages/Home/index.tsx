import React, { useState } from "react";
import { Layout, Tree, Table } from "antd";
import "./index.less";
import { DownOutlined } from "@ant-design/icons";
import type { TreeProps } from "antd/es/tree";
import type { ColumnsType } from "antd/es/table";
const { Sider, Content } = Layout;
import menus from "@/layouts/mens";
interface routeType {
    path: string;
    component?: any;
    children?: Array<routeType>;
    meta: {
        title: string;
        needLogin?: boolean;
    };
    hidden?: boolean;

    redirect?: string;
}

interface DataType {
    key: string;
    name: string;
}

interface treeData {
    key: string;
    label: string;
    children?: Array<treeData> | Array<routeType>;
}
const Home: React.FC = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
    ];
    // const data: DataType[] = [];

    const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
        setData([{ name: info.node.key, key: info.node.key }]);
    };
    const filterData = (treeData: treeData[]): any => {
        return treeData.map((i) => {
            if (i.children) {
                return {
                    key: i.key,
                    title: i.label,
                    children: i.children,
                };
            } else {
                return {
                    key: i.key,
                    title: i.label,
                };
            }
        });
    };
    const [data, setData] = useState<any>([]);
    return (
        <div className="home">
            <Layout className="layout">
                <Sider className="layout-sider">
                    {" "}
                    <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={["0-0-0"]}
                        onSelect={onSelect}
                        treeData={filterData(menus)}
                    />
                </Sider>
                <Content className="layoutcolor">
                    <div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default Home;
