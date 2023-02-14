import React, { useState } from "react";
import DocumentTitle from "react-document-title";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import logo from "@/assets/logo_2.png";
import "@/styles/login/login.css";
import cookies from "react-cookies";

interface Iprops {}

interface formValue {
    username: string;
    password: string;
}
const Login: React.FC<Iprops> = () => {
    const [typeView] = useState(0);
    const Navigate = useNavigate();
    const onFinish = (values: formValue) => {
        // console.log("Received values of form: ", values);
        const { username, password } = values;
        if (username === "admin" && password === "admin@2023") {
            cookies.save("token", "token123", {
                path: "/",
            });
            Navigate("/overview");
        }
    };

    return (
        <DocumentTitle title={"登录页"}>
            <div className="login-container">
                <div className="pageHeader">
                    <img src={logo} alt="logo" />
                    <span>后台管理模板</span>
                </div>
                <div className="login-box">
                    <div className="login-text">
                        <span className={typeView === 0 ? "active" : ""}>
                            登录
                        </span>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        {typeView === 0 ? (
                            <div>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: "用户名不能为空",
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
                                            message: "密码不能为空",
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
                            </div>
                        ) : (
                            <div className="right_content"></div>
                        )}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </DocumentTitle>
    );
};
export default Login;
