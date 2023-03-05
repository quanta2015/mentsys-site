import React,{useEffect} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import { inject, observer,MobXProviderContext } from 'mobx-react'
import { MENU_LIST } from '@/constant/urls'
import {isN} from '@/util/fn'
import { toJS } from 'mobx'

import s from './index.module.less';
import logo from '@/img/logo.svg'



const Layout = () => {
  const navigate = useNavigate()
  const { store } = React.useContext(MobXProviderContext)


  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      store.menuLoad()
    }
  }, []);

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


  console.log(toJS(store.menu))
	 
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
            {store.menu.map((item,i)=>
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
