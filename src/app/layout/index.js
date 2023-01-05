import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import {isN} from '@/util/fn'

import s from './index.module.less';
import logo from '@/img/logo.svg'


const menuList = [
  {t:0, k: '更新导师信息', v: '/editT'},
  {t:0, k: '指导学生信息', v: '/mentS'},
  {t:0, k: '更换指导学生', v: '/changeS'},
  {t:0, k: '预约交流指导', v: '/orderMent'},
  {t:1, k: '更新学业信息', v: '/editS'},
  {t:1, k: '选择学习方向', v: '/selectArea'},
  {t:1, k: '更换学习方向', v: '/changeArea'},
  {t:1, k: '评价导师',    v: '/evalT'},
  {t:2, k: '查看导师信息', v: '/queryT'},
  {t:2, k: '查看学生信息', v: '/mentS'},
  {t:2, k: '审核指导请求', v: '/audit'},
  {t:2, k: '设置系统参数', v: '/config'},
]


const Layout = ({store}) => {
  const navigate = useNavigate();

  const selMenu =(e)=>{
    console.log(e)
  }

  const doLogout =()=>{
    window.token = null
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
            {menuList.filter(e=> e.t===store.user?.role).map((item,i)=>
              <span onClick={()=>selMenu(item)}>{item.k}</span>
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
