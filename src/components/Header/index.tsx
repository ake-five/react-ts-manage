import React from "react";
import "./ht.css";
import { CaretDownFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Button } from "antd";
interface IProps {
    [propName: string]: any;
}
const items: MenuProps["items"] = [
    {
        key: "1",
        label: <Button type="text">退出 登录</Button>,
    },
];
const HomeTop: React.FC = (props: IProps) => {
    return (
        <div className="ht-block">
            <div></div>
            <div>
                <Dropdown menu={{ items }} className="dropdown">
                    <div onClick={(e) => e.preventDefault()}>
                        <Space>
                            admin
                            <CaretDownFilled />
                        </Space>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};
export default React.memo(HomeTop);
