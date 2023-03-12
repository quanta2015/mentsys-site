import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
let ListStud = Loadable({ loader: () => import("./app/listStud") });
let QueryT = Loadable({ loader: () => import("./app/queryT") });
let EvalTech = Loadable({ loader: () => import("./app/evalTech") });
let TestT = Loadable({ loader: () => import("./app/testT") });
let Test = Loadable({ loader: () => import("./app/test") });
let EvalMent = Loadable({ loader: () => import("./app/evalMent") });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/editS" element={<EditS />} />
            <Route path="/editT" element={<EditT />} />
            <Route path="/selectMent" element={<SelectMent />} />
            <Route path="/listStud" element={<ListStud />} />
            <Route path="/queryT" element={<QueryT />} />
            <Route path="/evalTech" element={<EvalTech />} />
            <Route path="/evalMent" element={<EvalMent />} />
            <Route path="/testT/:name/:uid" element={<TestT />} />
            <Route path="/testT/:name/:uid/test/:id" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
