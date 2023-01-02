import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import Loadable from '@/component/Loadable'
import zhCN from 'antd/es/locale/zh_CN'

import injects from '@/store'

import '@/less/var.less'
import '@/less/com.less'

//强制改动 mobx 中变量使用 mobx 中的 @action 方式，避免在其他地方改动
configure({enforceActions: 'observed'})

let Login  = Loadable({ loader: () => import('./app/login') })
let Index  = Loadable({ loader: () => import('./app/index')})
let Layout = Loadable({ loader: () => import('./app/layout')})
let Write = Loadable({ loader: () => import('./app/student/write')})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
