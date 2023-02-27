import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { inject,observer } from 'mobx-react'
import * as urls from '@/constant/urls'

import s from './index.module.less';


const Index = ({store}) => {
  const navigate = useNavigate();//V6的路由导航

  useEffect(() => {
    // if (!jwt.loadToken()){
    //   navigate('/login')
    // } 

    if (!window.token) {
      navigate('/login')
    }
  }, []);

  


  return (
  
    <div className={s.main}>
      
    </div>
  )


}

export default  inject('store')(observer(Index))