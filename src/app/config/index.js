import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import { API_SERVER } from '@/constant/apis'
import { API_LOGIN,SKILL_OPT,AREA_OPT,FIELD_OPT,API_TECH_SAVE } from '@/constant/urls'
import { Form, Input, Button, message,Select } from 'antd'

import s from './index.module.less';

import person from '@/img/person.svg'
import { Switch } from 'antd';
import { DatePicker, Space } from 'antd';
import { API_MENU_UPDATE } from '../../constant/urls';
const { RangePicker } = DatePicker;




const Config = () => {
  const { store } = React.useContext(MobXProviderContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let params=[{
    "fr":"",
    "to":""
  },{
    "fr":"",
    "to":""
  },{
    "fr":"",
    "to":""
  }];
  const onChange1 = (data,datajs,dataString) => {
    // console.log(data);
    console.log(datajs[0].toString());
    params[0].fr=datajs[0].slice(0,4)+datajs[0].slice(5,7)+datajs[0].slice(8,10)+datajs[0].slice(11,13)+datajs[0].slice(14,16)+datajs[0].slice(17)
    params[0].to=datajs[1].slice(0,4)+datajs[1].slice(5,7)+datajs[1].slice(8,10)+datajs[1].slice(11,13)+datajs[1].slice(14,16)+datajs[1].slice(17)
    // console.log(params)
  };
  const onChange2 = (data,datajs,dataString) => {
    console.log(data);
    // console.log(datajs[0].toString());
    params[1].fr=datajs[0].slice(0,4)+datajs[0].slice(5,7)+datajs[0].slice(8,10)+datajs[0].slice(11,13)+datajs[0].slice(14,16)+datajs[0].slice(17)
    params[1].to=datajs[1].slice(0,4)+datajs[1].slice(5,7)+datajs[1].slice(8,10)+datajs[1].slice(11,13)+datajs[1].slice(14,16)+datajs[1].slice(17)
  };
  const onChange3 = (data,datajs,dataString) => {
    console.log(data);
    // console.log(datajs[0].toString());
    params[2].fr=datajs[0].slice(0,4)+datajs[0].slice(5,7)+datajs[0].slice(8,10)+datajs[0].slice(11,13)+datajs[0].slice(14,16)+datajs[0].slice(17)
    params[2].to=datajs[1].slice(0,4)+datajs[1].slice(5,7)+datajs[1].slice(8,10)+datajs[1].slice(11,13)+datajs[1].slice(14,16)+datajs[1].slice(17)
  };


  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      
    }
  }, []);
  
  const saveAdmin=async()=>{
    try {
        
        for(let i=6;i<=8;i++){
            const param={
                "id": i,
                "fr":params[i-6].fr,
                "to": params[i-6].to,
            }
            let r = await store.post(API_MENU_UPDATE, param)
            console.log(params)
            if (r.code === 200) {
                message.info('保存信息成功！')
              }
        }
        
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  const saveAdminAll=async()=>{
    try {
        
        for(let i=6;i<=8;i++){
            const param={
                "id": i,
                "fr":'20221201163839',
                "to": '20990421164243',
            }
            let r = await store.post(API_MENU_UPDATE, param)
            
            if (r.code === 200) {
                message.info('保存信息成功！')
              }
        }
        
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  return (
    <div className={s.bg}>
        <div className={s.title}>学生界面菜单开通日期设置</div>
        
        <div className={s.content}>
        <div className={s.choose}>
        <div className={s.iteml}>选择学习方向</div>
        
        <RangePicker showTime onChange={onChange1} size={'large'}/>
       
        
     </div>
     <div className={s.choose}>
        <div className={s.iteml}>更换学习方向</div>
        <RangePicker showTime onChange={onChange2} size={'large'}/>
     </div>
     <div className={s.choose}>
        <div className={s.iteml}>评价导师</div>
        <RangePicker showTime onChange={onChange3} size={'large'}/>
     </div>
        </div>
     <div className={s.fun}>
     <Button type="primary" size="large" onClick={saveAdmin}>保 存</Button>
     <Button type="primary" size="large" onClick={saveAdminAll}>一键开启所有菜单</Button>
     </div>
     
    </div>
  )

}

export default observer(Config)
