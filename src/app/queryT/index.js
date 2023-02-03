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
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '研究领域',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '张三',
    phone: 13105527781,
    email: '173347273@qq.com',
    area:'人工智能'
  },
  {
    key: '2',
    name: '张三',
    phone: 13105527781,
    email: '173347273@qq.com',
    area:'人工智能'
  },
];



const QueryT = () => {
  const { store } = React.useContext(MobXProviderContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      // store.techLoad("前端方向"); 
    }
  }, []);
  
  return (
    <div className={s.bg}>
      <div className={s.mokuai}>
        <div className={s.title}>前端方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
      <div className={s.mokuai}>
        <div className={s.title}>后端方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
      <div className={s.mokuai}>
        <div className={s.title}>研究方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
      <div className={s.mokuai}>
        <div className={s.title}>人工智能方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
      <div className={s.mokuai}>
        <div className={s.title}>多媒体方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
      <div className={s.mokuai}>
        <div className={s.title}>竞赛方向老师列表</div>
        <Table columns={columns} dataSource={data}  />
      </div>
    </div>
  )

}

export default observer(QueryT)
