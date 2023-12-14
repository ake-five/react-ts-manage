import React from "react";
import "./index.css";
import Routes from "@/router/index";
import "antd/dist/antd.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
console.log('min');

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter basename='react-ts-manage'>
            <div style={{ height: "100%" }}>
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
);
