import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { toJS } from 'mobx'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import { API_STUD_SAVE,SKILL_OPT,CERT_OPT,AWARD_OPT,AREA_OPT,SCHE_OPT } from '@/constant/urls'
import { Form, Input, Button, message,Select } from 'antd'
import fileToBlob from '@/util/fileToBlob'
import UploadImg from '@/component/UploadImg'

import s from './index.module.less';
import * as urls from '@/constant/urls'
import person from '@/img/person.svg'
import store from '../../store/store';
var param1={
  "skill": store.user.skill,
  "cert": store.user.cert,
  "award": store.user.award,
  "schedule": store.user.schedule,
  "img": store.user.img
}

const EditS = () => {
  const { store } = React.useContext(MobXProviderContext)
  const navigate = useNavigate()
  const [form] = Form.useForm()

  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
    }
  }, []);

  const doChgVal=(v,opt)=>{
    store.setUserVal(v,opt)
  }

  const doChgValSchedule=(v,opt)=>{
    store.setUserSchedule(v,opt)
  }

  const saveStudent=async()=>{
    try {
      const params = await form.validateFields()
      params.skill = params.skill.join('|')
      params.cert  = params.cert.join('|')
      params.award = params.award.join('|')
      let s0 = params.sche0.join('&')
      let s1 = params.sche1.join('&')
      let s2 = params.sche2.join('&')
      let s3 = params.sche3.join('&')
      params.schedule = [s0,s1,s2,s3].join('|')
      params.img = store.user.img

      let r = await store.post(API_STUD_SAVE, params)
      if (r.code === 200) {
        message.info('保存信息成功！')
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  

  return (
    <div className={s.std}>
      <span className="g-tl">学生个人信息</span>

      <Form form={form} className={s.frm}>

        <div className={s.frml}>
          <UploadImg width={150} height={200} />
        </div>
        <div className={s.frmr}>
          <div className={s.sect}>基本信息</div>
          <div className={s.row}>
            <label>姓名</label>
            <span>{store.user?.name}</span>
            <label>性别</label>
            <span>{store.user?.sex?"男":"女"}</span>
          </div>
          <div className={s.row}>
            <label>专业</label>
            <span>{store.user?.major}</span>
            <label>学院</label>
            <span>{store.user?.college}</span>
          </div>
          <div className={s.row}>
            <label>学籍</label>
            <span>{store.user?.grade}级</span>
            <label>班级</label>
            <span>{store.user?.class}</span>
          </div>
          <div className={s.row}>
            <label>学号</label>
            <span>{store.user?.uid}</span>
            <label>身份证</label>
            <span>{store.user?.cert_code}</span>
          </div>
          <div className={s.row}>
            <label>邮箱</label>
            <span>{store.user?.email}</span>
            <label>出生年月</label>
            <span>{store.user?.brithday}</span>
          </div>
          <br/>
          <div className={s.sect}>其他信息</div>
          <div className={s.attr}>
            <label>个人特长</label>
            <Form.Item name="skill" initialValue={store.user?.skill} rules={[{ required: true, message: '请选择个人特长'}]}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                value={store.user?.skill}
                placeholder="请选择个人特长"
                options={SKILL_OPT}
                onChange={(v)=>doChgVal(v,'skill')}
              />
            </Form.Item>
          </div>
          <div className={s.attr}>
            <label>获得证书</label>
            <Form.Item name="cert" initialValue={store.user?.cert} rules={[{ required: true, message: '请选择获得证书'}]}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                value={store.user?.cert}
                placeholder="请选择获得证书"
                options={CERT_OPT}
                onChange={(v)=>doChgVal(v,'cert')}
              />
            </Form.Item>
          </div>
          <div className={s.attr}>
            <label>获奖情况</label>
            <Form.Item name="award" initialValue={store.user?.award} rules={[{ required: true, message: '请选择获得证书'}]}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                value={store.user?.award}
                placeholder="请选择获得证书"
                options={AWARD_OPT}
                onChange={(v)=>doChgVal(v,'award')}
              />
            </Form.Item>
          </div>
          <div className={s.attr}>
            <label>学业规划</label>
            <section>
              <i>第一学年</i>
              <Form.Item name="sche0" initialValue={store.user?.schedule[0]} rules={[{ required: true, message: '请选择学业规划'}]}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  value={store.user?.schedule[0]}
                  placeholder="请选择学业规划"
                  options={SCHE_OPT}
                  onChange={(v)=>doChgValSchedule(v,0)}
                />
              </Form.Item>
            </section>
            <section>
              <i>第二学年</i>
              <Form.Item name="sche1" initialValue={store.user?.schedule[1]} rules={[{ required: true, message: '请选择学业规划'}]}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  value={store.user?.schedule[1]}
                  placeholder="请选择学业规划"
                  options={SCHE_OPT}
                  onChange={(v)=>doChgValSchedule(v,1)}
                />
              </Form.Item>
            </section>
            <section>
              <i>第三学年</i>
              <Form.Item name="sche2" initialValue={store.user?.schedule[2]} rules={[{ required: true, message: '请选择学业规划'}]}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  value={store.user?.schedule[2]}
                  placeholder="请选择学业规划"
                  options={SCHE_OPT}
                  onChange={(v)=>doChgValSchedule(v,2)}
                />
              </Form.Item>
            </section>
            <section>
              <i>第四学年</i>
              <Form.Item name="sche3" initialValue={store.user?.schedule[3]} rules={[{ required: true, message: '请选择学业规划'}]}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  value={store.user?.schedule[3]}
                  placeholder="请选择学业规划"
                  options={SCHE_OPT}
                  onChange={(v)=>doChgValSchedule(v,3)}
                />
              </Form.Item>
            </section>
          </div>
          <div className={s.attr}>
            <label>研究方向</label>
            <Form.Item name="field" initialValue={store.user?.field} rules={[{ required: true, message: '请选择学业规划'}]}>
              <Select
                allowClear
                style={{ width: '100%' }}
                value={store.user?.field}
                placeholder="Please select"
                options={AREA_OPT}
                onChange={(v)=>doChgVal(v,'field')}
              />
            </Form.Item>
          </div>

          <div className={s.fun}>
            <Button type="primary" size="large" onClick={saveStudent}>保 存</Button>
          </div>

        </div>
      </Form>
    </div>
  )


}

export default observer(EditS)