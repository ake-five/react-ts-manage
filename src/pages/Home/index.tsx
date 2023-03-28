import React, { useState } from "react";
import { Layout, Tree, Table, Button } from "antd";
import "./index.less";
import { DownOutlined } from "@ant-design/icons";
import type { TreeProps } from "antd/es/tree";
import type { ColumnsType } from "antd/es/table";
const { Sider, Content } = Layout;
import menus from "@/layouts/mens";
// import AceEditor from "@/components/AceEditor";
import MackDown from "@/components/MackDown";
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
    title: string;
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
            render(text, record, index) {
                return record.name || record.title;
            },
        },
        {
            title: "Path",
            dataIndex: "key",
            key: "key",
        },
    ];
    // const data: DataType[] = [];

    const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
        setData([{ name: info.node.title, key: ` /${info.node.key} ` }]);
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
    const [data, setData] = useState<any>(() => {
        const node = filterData(menus)[0];
        return [{ name: node.title, key: ` /${node.key} ` }];
    });
    const [defKeys] = useState<string[]>(() => {
        const node = filterData(menus)[0];
        return [node.key];
    });

    return (
        <Layout className="layout">
            <Sider className="layout-sider">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultSelectedKeys={defKeys}
                    onSelect={onSelect}
                    treeData={filterData(menus)}
                />
            </Sider>
            <Content className="layoutcolor">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={false}
                />
                <div className="layoutAce">
                    <MackDown />
                </div>
                <div className="layoutFooter">
                    <Button type="primary">保存</Button>
                    <Button style={{ marginRight: "16px" }}>撤回</Button>
                </div>
            </Content>
        </Layout>
    );
};

export default Home;
