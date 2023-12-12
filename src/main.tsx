import React from "react";
import "./index.css";
import Routes from "@/router/index";
import "antd/dist/antd.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";



// import { registerMicroApps, start } from 'qiankun';

// const apps = [
//     {
//         name: '子应用1',
//         entry: 'http://localhost:8080', // 子应用1的入口地址
//         container: '#subapp-container', // 子应用1渲染的容器
//         activeRule: '/app1' // 匹配的路径规则
//     },
//     // 添加其他子应用的配置...
// ];

// registerMicroApps(apps);111

// start();

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <div style={{ height: "100%" }}>
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
);
