import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import {isN} from '@/util/fn'

import s from './index.module.less';
import logo from '@/img/logo.svg'


const Layout = ({store}) => {


	 
  return (
    <>
      <div className={s.nav}>
        <div className={s.logo}>
          <img src={logo} />
          <span>信息学院综合导师课外育人管理系统</span>
        </div>

        <div className="info">
          {store.user?.name}
        </div>
      </div>



      
      
      <Outlet />
      
    </>
  )
 
}

export default inject('store')(observer(Layout))
