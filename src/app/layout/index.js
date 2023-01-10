import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { MENU_LIST } from '@/constant/urls'
import {isN} from '@/util/fn'

import s from './index.module.less';
import logo from '@/img/logo.svg'



const Layout = ({store}) => {
  const navigate = useNavigate();

  const selMenu =(e)=>{
    navigate(e.v)
  }

  const doLogout =()=>{
    window.token = null
    store.projr = []
    store.projh = []
    store.docs  = []
    navigate('/login')
  }
	 
  return (
    <>
      <div className={s.nav}>
        <div className={s.logo}>
          <img src={logo} />
          <span>信息学院综合导师课外育人管理系统</span>
        </div>

        <div className={s.wrap}>
          <div className={s.info}>
            <p>
              <label>{store.user?.name}</label>
              <span>[ {store.user?.uid} ]</span>
            </p>
          </div>

          <div className={s.menu}>
            {MENU_LIST.filter(e=> e.t===store.user?.role).map((item,i)=>
              <span key={i} onClick={()=>selMenu(item)}>{item.k}</span>
            )}
            <span onClick={doLogout}>退出登录</span>
          </div>


        </div>

        
      </div>



      
      
      <Outlet />
      
    </>
  )
 
}

export default inject('store')(observer(Layout))
