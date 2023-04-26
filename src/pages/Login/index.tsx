import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./_components/Login";
import "./login.css";
const App: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [rtUrl, setRtUrl] = useState("");
    const handleLogin = (username: string, password: string) => {
        // 处理登录事件
        localStorage.setItem("token", "loginToken");
        localStorage.setItem(
            "user",
            `{username:${username},password:${password}}`
        );
        navigate(rtUrl === "/login" ? "/" : rtUrl);
    };

    useEffect(() => {
        setRtUrl(location?.pathname);
        location?.pathname !== "/login" && navigate("/login");
    }, []);
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-logo">
                    <h2 className="logo-text">React-Antd</h2>
                </div>
                <Login onLogin={handleLogin} />
            </div>
        </div>
    );
};

export default App;
