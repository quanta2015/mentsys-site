import React from 'react';
import { Routes, Route, BrowserRouter ,HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import Loadable from '@/component/Loadable'
import zhCN from 'antd/es/locale/zh_CN'

import { Provider } from 'mobx-react'
import injects from '@/store'
// 在入口文件index.js中导入状态仓库store和状态更新供应组件Provider
import '@/less/var.less'
import '@/less/com.less'


configure({enforceActions: 'observed'})


let Login  = Loadable({ loader: () => import('./app/login') })
let Index  = Loadable({ loader: () => import('./app/index')})
let Layout = Loadable({ loader: () => import('./app/layout')})
let EditS  = Loadable({ loader: () => import('./app/editS')})
let EditT  = Loadable({ loader: () => import('./app/editT')})
let OrderMent = Loadable({loader: () => import('./app/orderMent')})
// <<<<<<< HEAD:src/index.js
// <<<<<<< HEAD
// let SelectArea = Loadable({loader:() => import('./app/selectArea')})
// =======
// let SelectMent  = Loadable({ loader: () => import('./app/selectMent')})
// >>>>>>> de3ac9604ba8aa51699e2f6c7263224e61614210

// =======
let SelectMent = Loadable({ loader: () => import('./app/selectMent')})
let ListStud   = Loadable({ loader: () => import('./app/listStud')})
let QueryT   = Loadable({ loader: () => import('./app/queryT')})
// >>>>>>> d8dccfd5b1a1de4328a16ee263768d773410443a:site/src/index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 在入口文件index.js中,使用Provider 包裹App根组件, 并设置store
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route element={<Layout />}>
{/* <<<<<<< HEAD:src/index.js */}
            <Route path="/" element={<Index />} />
            <Route path="/editS" element={<EditS />} />
            <Route path="/editT" element={<EditT />} />
            <Route path='/orderMent' element={<OrderMent/>}/>
{/* <<<<<<< HEAD */}
            {/* <Route path='/selectArea' element={<SelectArea/>}/> */}
{/* ======= */}
            <Route path="/selectMent" element={<SelectMent />} />
{/* >>>>>>> de3ac9604ba8aa51699e2f6c7263224e61614210 */}
=======
            <Route path="/"           element={<Index />} />
            <Route path="/editS"      element={<EditS />} />
            <Route path="/editT"      element={<EditT />} />
            <Route path="/selectMent" element={<SelectMent />} />
            <Route path="/listStud"   element={<ListStud />} />
            <Route path="/queryT"   element={<QueryT />} />
            <Route path='/orderMent' element={<OrderMent/>}/>
{/* >>>>>>> d8dccfd5b1a1de4328a16ee263768d773410443a:site/src/index.js */}
          </Route>
        </Routes>
      </HashRouter>
    </ConfigProvider>
  </Provider>
);
