import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import menus from "@/router/routes";
interface DataType {
    key: string;
    name: string;
    path: string;
    children?: DataType[];
}
export interface routeType {
    path: string;
    component?: any;
    children?: Array<routeType>;
    meta?: {
        title?: string;
        needLogin?: boolean;
    };
    redirect?: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "12%",
    },
    {
        title: "Path",
        dataIndex: "path",
        key: "path",
        width: "12%",
    },
];
const filterData = (data: routeType[]): any => {
    return data
        .filter((i) => i.component)
        .map((i: routeType) => {
            if (i.children) {
                return {
                    ...i,
                    key: `${i.path}${i.meta && i.meta.title}`,
                    name: i.meta && i.meta.title,
                    path: i.path,
                    children: filterData(i.children || []),
                };
            } else {
                return {
                    ...i,
                    key: `${i.path}${i.meta && i.meta.title}`,
                    name: i.meta && i.meta.title,
                    path: i.path,
                };
            }
        });
};

// rowSelection objects indicates the need for row selection

const Routes: React.FC = () => {
    return (
        <>
            <Table columns={columns} dataSource={filterData(menus)} />
        </>
    );
};

export default Routes;
