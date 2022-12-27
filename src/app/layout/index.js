import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import {isN} from '@/util/fn'

import s from './index.module.less';
import logo from '@/img/icon_logo.png'


class Layout extends React.Component {
	


	render() {

    return (
      <>
        <div className={s.nav}>
          <img src={logo} />
          <span>信息学院综合导师课外育人管理系统</span>
        </div>
        
        
        <Outlet />
        
      </>
    )
  }
}

export default Layout
