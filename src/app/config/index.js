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
const { RangePicker } = DatePicker;




const Config = () => {
  const { store } = React.useContext(MobXProviderContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onChange = (data,datajs,dataString) => {
    console.log(data);
    console.log(datajs);
  };


  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      
    }
  }, []);
  
  const saveAdmin=async()=>{
    try {
      
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
        <RangePicker showTime onChange={onChange} size={'large'}/>
     </div>
     <div className={s.choose}>
        <div className={s.iteml}>更换学习方向</div>
        <RangePicker showTime onChange={onChange} size={'large'}/>
     </div>
     <div className={s.choose}>
        <div className={s.iteml}>评价导师</div>
        <RangePicker showTime onChange={onChange} size={'large'}/>
     </div>
        </div>
     <div className={s.fun}>
     <Button type="primary" size="large" onClick={saveAdmin}>保 存</Button>
     </div>
     
     
    </div>
  )

}

export default observer(Config)
