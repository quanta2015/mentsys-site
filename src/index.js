import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import { ConfigProvider } from "antd";
import Loadable from "@/component/Loadable";
import zhCN from "antd/es/locale/zh_CN";

import injects from "@/store";

import "@/less/var.less";
import "@/less/com.less";

configure({ enforceActions: "observed" });

let Login = Loadable({ loader: () => import("./app/login") });
let Index = Loadable({ loader: () => import("./app/index") });
let Layout = Loadable({ loader: () => import("./app/layout") });
let EditS = Loadable({ loader: () => import("./app/editS") });
let EditT = Loadable({ loader: () => import("./app/editT") });
let SelectMent = Loadable({ loader: () => import("./app/selectMent") });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/editS" element={<EditS />} />
            <Route path="/editT" element={<EditT />} />
            <Route path="/selectMent" element={<SelectMent />} />
          </Route>
        </Routes>
      </HashRouter>
    </ConfigProvider>
  </Provider>
);
