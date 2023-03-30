import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "./login.css";
const App: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [rtUrl, setRtUrl] = useState("");
    const onFinish = (values: any) => {
        localStorage.setItem("token", "loginToken");

        navigate(rtUrl === "/login" ? "/" : rtUrl);
    };
    useEffect(() => {
        setRtUrl(location?.pathname);
        location?.pathname !== "/login" && navigate("/login");
    }, []);
    return (
        <div className="container">
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;
