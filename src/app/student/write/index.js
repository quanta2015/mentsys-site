import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { inject,observer } from 'mobx-react'
import * as urls from '@/constant/urls'
import { Button, Space } from 'antd';
import s from './index.module.less';


const Write = ({store}) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!jwt.loadToken()){
  //     navigate('/login')
  //   } 
  // }, []);

  


  return (
    <div className={s.main}>
      <div className={s.header}>个人资料</div>
      <div className={s.container}>
        <div className={s.content}>
        <div className={s.tips}>首次进入系统，请按实际情况完善您的个人资料</div>
        <div className={s.line}>
            <div>姓名</div>
            <div>郑东旭</div>
        </div>
        <div className={s.line}>
            <div>电话</div>
            <input></input>
        </div>
        <div className={s.line}>
            <div>特长</div>
            <input></input>
        </div>
        <div className={s.line}>
            <div>获奖情况</div>
            <textarea className={s.bigInput}></textarea>
        </div>
        <div className={s.line}>
            <div>学业规划</div>
            <textarea className={s.bigInput}></textarea>
        </div>
        <div className={s.line}>
            <div>研究方向</div>
            <textarea className={s.bigInput}></textarea>
        </div>
        </div>
      </div>
      <div className={s.footer}>
        <Button type="primary" size='large'>提交</Button>
      </div>
    </div>
  )


}

export default  inject('store')(observer(Write))