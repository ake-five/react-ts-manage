import React, { useEffect, useState } from "react";
import { Layout, Tree, Table } from "antd";
import "./index.less";
import { DownOutlined } from "@ant-design/icons";
import type { TreeProps } from "antd/es/tree";
import type { ColumnsType } from "antd/es/table";
const { Sider, Content } = Layout;
// import AceEditor from "@/components/AceEditor";
// import MackDown from "@/components/MackDown";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/store";
import { IMenuActionType } from "@/store/reducer/menu";
interface DataType {
    key: string;
    name: string;
    title: string;
}

const Home: React.FC = () => {
    const {
        menu: { treeData, menus, defaultSelectedKeys },
    } = useSelector((state: rootState) => state.menu);
    const dispatch = useDispatch();
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
    const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
        setData([{ name: info.node.title, key: ` /${info.node.key} ` }]);
    };

    const [data, setData] = useState<any>(() => {
        return [];
    });

    useEffect(() => {
        if (!menus.length) return;
        dispatch({
            type: IMenuActionType.SETLOADING,
            payload: {
                loading: true,
            },
        });
        dispatch({
            type: IMenuActionType.INITTREE,
        });
    }, [menus]);

    return (
        <Layout className="layout">
            <Sider className="layout-sider">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultSelectedKeys={defaultSelectedKeys}
                    onSelect={onSelect}
                    treeData={[...treeData] || []}
                />
            </Sider>
            <Content className="layoutcolor">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={false}
                />
                <div className="layoutAce">{/* <MackDown /> */}</div>
                {/* <div className="layoutFooter">
                    <Button type="primary">保存</Button>
                    <Button style={{ marginRight: "16px" }}>撤回</Button>
                </div> */}
            </Content>
        </Layout>
    );
};

export default Home;
