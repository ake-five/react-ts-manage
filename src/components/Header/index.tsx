import React from "react";
import "./ht.css";
import { CaretDownFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import type { MenuProps } from "antd";
import { Dropdown, Space, Button } from "antd";
interface IProps {
    [propName: string]: any;
}

const HomeTop: React.FC = (props: IProps) => {
    const location = useLocation();
    const navto = useNavigate();
    const onClickDropdown = (e: any) => {
        localStorage.removeItem("token");
        navto("/login");
    };
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <Button type="text" onClick={onClickDropdown}>
                    退出 登录
                </Button>
            ),
        },
    ];
    return (
        <div className="ht-block">
            <div></div>
            <div>
                <Dropdown menu={{ items }} className="dropdown">
                    <div>
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
