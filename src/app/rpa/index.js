import React,{useEffect,useState} from 'react'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import * as urls from '@/constant/urls'
import { useNavigate } from 'react-router-dom'

import style from './index.module.less'



const Rpa = () => {
  const { store } = React.useContext(MobXProviderContext);
  const navigate = useNavigate();
  const [projh,setProjh]= useState([]) 

  useEffect(() => {
    store.rpaList().then(r=>{
      console.log(r)
    })
  }, []);


  return (
    <div className={style.rpa}>
      <div className={style.wrap}>
        <div className={style.row}>
          <span>公众号名称</span>
          <span>最早更新时间</span>
          <span>最迟更新时间</span>
          <span>更新次数</span>
        </div>
        {store.rpa.map((item,i)=>
          <div className={style.row}>
            <span>{item.columnName}</span>
            <span>{item.min}</span>
            <span>{item.max}</span>
            <span>{item.count}</span>
          </div>
        )}
      </div>

      <div className={style.wrap}>
        <div className={style.row}>
          <span>更新时间</span>
          <span>公众号名称</span>
          <span>新闻数量</span>
        </div>
        {store.his.map((item,i)=>
          <div className={style.row}>
            <span>{item.updateTime}</span>
            <span>{item.columnName}</span>
            <span>{item.newsCount}</span>
          </div>
        )}
      </div>
    </div>
  )

}

export default observer(Rpa)
