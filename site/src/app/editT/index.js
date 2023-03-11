import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import { API_SERVER } from '@/constant/apis'
import { API_LOGIN,SKILL_OPT,AREA_OPT,FIELD_OPT,API_TECH_SAVE } from '@/constant/urls'
import { Form, Input, Button, message,Select } from 'antd'
import TechDetail from '@/component/TechDetail'
import TechBasic from '@/component/TechBasic'



import s from './index.module.less';

import person from '@/img/person.svg'



const EditT = () => {
  const { store } = React.useContext(MobXProviderContext)
  const navigate = useNavigate();
  const [form] = Form.useForm();


  const [projh,setProjh]= useState([])
  const [projr,setProjr]= useState([])
  const [docs ,setDocs] = useState([])

  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      store.loadProj().then(r=>{
        setProjh(r.projh)
        setProjr(r.projr)
        setDocs(r.docs)
      })
    }
  }, []);


  const saveInfo=async()=>{
    try {
      const params = await form.validateFields()
      console.log(params);
      params.area = params.area.join('|')  
      let r = await store.post(API_TECH_SAVE, params)
      if (r.code === 200) {
        message.info('保存信息成功！')
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }



  return (
  
    <div className={s.std}>
      <span className="g-tl">导师个人信息</span>
      <Form form={form} className={s.frm}>
        <div className={s.frml}>
          <img src={`${API_SERVER}/img/tech/${store.user?.uid}.jpg`} />
        </div>
        <div className={s.frmr}>
          <TechBasic user={store.user} />
          <br/>

          <TechDetail projh={projh} projr={projr} docs={docs} />
          <br/>

          <div className={s.sect}>导师信息</div>
          <div className={s.attr}>
            <label>主要研究领域</label>
            <Form.Item name="area" initialValue={store.user?.area} rules={[{ required: true, message: '请选择研究领域'}]}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                options={FIELD_OPT}
              />
            </Form.Item>
          </div>
          <div className={s.attr}>
            <label>指导学生方向</label>
            <Form.Item name="field" initialValue={store.user?.field} rules={[{ required: true, message: '请选择指导方向'}]}>
              <Select
                allowClear
                style={{ width: '100%' }}
                // defaultValue={AREA_OPT[0].value}
                placeholder="Please select"
                options={AREA_OPT}
              />
            </Form.Item>
          </div>

          <div className={s.fun}>
            <Button type="primary" size="large" onClick={saveInfo}>保 存</Button>
          </div>


        </div>
        
      </Form>
    </div>
  )


}

export default  inject('store')(observer(EditT))
//export default  EditT