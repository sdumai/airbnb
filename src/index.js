// 第三方导入
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// 自己的导入
import App from "@/App";
import "normalize.css";
import "./assets/css/index.less";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 异步导入时占位 */}
    <Suspense fallback="loading">
      <HashRouter>
        <Provider store={store}>
          <App></App>
        </Provider>
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
