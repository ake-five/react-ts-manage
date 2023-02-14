import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom"; //引入路由
import reportWebVitals from "./reportWebVitals";
import routes from "./router/index";
import RouterView from "./router/RouteView";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>{RouterView(routes)}</Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
