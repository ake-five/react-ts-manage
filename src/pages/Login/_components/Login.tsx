import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
      };
      
    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        onLogin(username, password);
    };

    return (
        <Form onFinish={handleSubmit}  {...layout}>
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: "请输入用户名" }]}
            >
                <Input value={username} onChange={handleUsernameChange} />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
            >
                <Input.Password
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
