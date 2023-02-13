import React, { useState } from "react";
import DocumentTitle from "react-document-title";
import { Input, Button, Checkbox } from "antd";
import logo from "../../assets/logo_2.png";
import "../../styles/login/login.css";

interface Iprops {}
interface formLogin {
    username: string;
    userPwd: string;
}
interface formRegister {
    username: string;
    userPwd: string;
    userPwd2: string;
}
interface State {
    formLogin: formLogin;
    checked: boolean;
    formRegister: formRegister;
}
const Login: React.FC<Iprops> = () => {
    const [typeView] = useState(0);
    const [state] = useState<State>({
        formLogin: { username: "", userPwd: "" },
        checked: false,
        formRegister: {
            username: "",
            userPwd2: "",
            userPwd: "",
        },
    });
    const { formLogin, checked, formRegister } = state;
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
                        <b>·</b>
                        <span className={typeView === 1 ? "active" : ""}>
                            注册
                        </span>
                    </div>

                    {typeView === 0 ? (
                        <div className="right-content">
                            <div className="input-box">
                                <Input
                                    type="text"
                                    className="input"
                                    value={formLogin.username}
                                    onChange={(e: any) => {}}
                                    placeholder="请输入登录邮箱/手机号"
                                />
                                <Input
                                    type="password"
                                    className="input"
                                    maxLength={20}
                                    value={formLogin.userPwd}
                                    onChange={(e: any) => {}}
                                    onPressEnter={(e: any) => {}}
                                    placeholder="请输入登录密码"
                                />
                            </div>
                            <Button
                                className="loginBtn"
                                type="primary"
                                disabled={
                                    !formLogin.username || !formLogin.userPwd
                                }
                            >
                                立即登录
                            </Button>
                            <div className="option">
                                <Checkbox
                                    className="remember"
                                    checked={checked}
                                >
                                    <span className="checked">记住我</span>
                                </Checkbox>
                                <span className="forget-pwd">忘记密码?</span>
                            </div>
                        </div>
                    ) : (
                        <div className="right_content">
                            <div className="input-box">
                                <Input
                                    type="text"
                                    className="input"
                                    value={formRegister.username}
                                    onChange={(e: any) => {}}
                                    placeholder="请输入注册邮箱/手机号"
                                />
                                <Input
                                    type="password"
                                    className="input"
                                    maxLength={20}
                                    value={formRegister.userPwd}
                                    onChange={(e: any) => {}}
                                    placeholder="请输入密码"
                                />
                                <Input
                                    type="password"
                                    className="input"
                                    maxLength={20}
                                    value={formRegister.userPwd2}
                                    onChange={(e: any) => {}}
                                    onPressEnter={(e: any) => {}}
                                    placeholder="请再次确认密码"
                                />
                            </div>
                            <Button
                                className="loginBtn"
                                type="primary"
                                disabled={
                                    !formRegister.username ||
                                    !formRegister.userPwd ||
                                    !formRegister.userPwd2
                                }
                            >
                                立即注册
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </DocumentTitle>
    );
};
export default Login;
