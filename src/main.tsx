import React from "react";
import "./index.css";
import Routes from "@/router/index";
import 'antd/dist/antd.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);
