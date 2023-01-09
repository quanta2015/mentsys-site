import React from 'react'
import { inject,observer } from 'mobx-react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import * as urls from '@/constant/urls'
import { useNavigate } from 'react-router-dom'
import logo from '../../img/logo_03.png'
import user from '../../img/user.svg'
import style from './index.module.less'
<<<<<<< HEAD
import { Header } from 'antd/es/layout/layout';
=======
import logo from '@/img/logo.svg'
import edu from '@/img/logo.png'
import mentsys from '@/img/mentsys.png'
>>>>>>> 47dfa389b04236e091f5b5a44a17314cddeefbb0



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
<<<<<<< HEAD
  <div className={style.index}>
      <Header className={style.header}>
          <div className={style.logo}>
              <a className={style.web_logo}>
                <img src={logo}></img>
              </a>
          </div>
      </Header>
      <div className={style.body}>
        <section className={style.body_inner}>
          <div className={style.body_left}>
            <div className={style.left_inner}>
              <ul>
                 <li>综合导师</li>
                 <li>课外</li>
                 <li>育人管理系统</li>
              </ul>
            </div>
          </div>
          <div className={style.body_right}>
          <div className={style.login}>
        <Form form={form} className={style.login_frm}>
        <div className={style.title}>
          <div className={style.title_inner}>
            <img src={user}></img>
            <label>User Login</label>
          </div>
          
        </div>
        <Form.Item name="uid" rules={[{ required: true, message: '请输入账号'}]}>
          <Input size="large" placeholder="请输入账号" allowClear prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true, message: '请输入账号'}]}>
          <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item className={style.btn}>
          <Button type="primary" size="large" className={style.input_btn} block onClick={doLogin}>登 录</Button>
        </Form.Item>
        <Form.Item className={style.tip}>
          <div  className={style.tip_inner}>
            <ul >
              <li>用户名学(工)号</li>
              <li>初始密码为学（工）号</li>
            </ul>
          </div>
        </Form.Item>
      </Form>
       
        </div>
            
          </div>
        </section>
        
      </div>
      <footer className={style.m_footer}>
          <div className={style.footer_inner}>
              <a href='https://icp.chinaz.com/info?q=hznu.edu.cn'>© 杭州师范大学信息科学与技术学院 All Rights Reserved.浙ICP备2022006063号-1 </a>
          </div>
      </footer>
  </div>
     )
=======
  
    <div className={style.login}>
      <div className={style.wrap}>
        
        <div className={style.logo}>
          <div className={style.title}>
            <img src={logo} />
            <p>
              <span>信息学院综合导师课外育人管理系统</span>
              <label>Tutor Extracurricular Education System of Information College</label>
            </p>
          </div>
          <div className={style.edu}>
            <img src={edu} />
          </div>
          
          
        </div>
      
        <Form form={form} className={style.login_frm}>
          <label>用户登录</label>
          <Form.Item name="uid" rules={[{ required: true, message: '请输入账号'}]}>
            <Input size="large" style={{height: '45px'}} placeholder="请输入账号" allowClear prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="pwd" rules={[{ required: true, message: '请输入账号'}]}>
            <Input.Password size="large" style={{height: '45px'}} placeholder="请输入密码" prefix={<LockOutlined />}/>
          </Form.Item>
          <p></p>
          <Form.Item>
            <Button type="primary" size="large" className="input-btn" block onClick={doLogin}>登 录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
>>>>>>> 47dfa389b04236e091f5b5a44a17314cddeefbb0


}

export default inject('store')(observer(Login))
