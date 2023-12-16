import React from 'react';

import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Routes from "@/router/index";
import './index.css';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter basename='react-ts-manage'>
            <div style={{ height: "100%" }}>
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;