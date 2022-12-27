import React from 'react'
import { inject,observer } from 'mobx-react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import * as urls from '@/constant/urls'
import { useNavigate } from 'react-router-dom'


import style from './index.module.less'



const Login = ({store}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const doLogin =async()=>{
    try {
      const params = await form.validateFields();
      const r = await store.login(urls.API_LOGIN, params)
      if (r) {
        navigate('/')
      }

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  return (
  
    <div className={style.login}>
      <Form form={form} className={style.login_frm}>
        <label>导师系统</label>
        <Form.Item name="uid" rules={[{ required: true, message: '请输入账号'}]}>
          <Input size="large" placeholder="请输入账号" allowClear prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true, message: '请输入账号'}]}>
          <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" className="input-btn" block onClick={doLogin}>登 录</Button>
        </Form.Item>
      </Form>
    </div>
  )


}

export default inject('store')(observer(Login))
