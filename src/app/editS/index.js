import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { inject,observer } from 'mobx-react'
import { Speciality_OPT,Plan_OPT ,API_LOGIN,SKILL_OPT,AREA_OPT,Award_OPT } from '@/constant/urls'
import { Form, Input, Button, message,Select } from 'antd'
import axios from 'axios'
import s from './index.module.less';
import * as urls from '@/constant/urls'
import person from '@/img/person.svg'


const opt = [{lable:'计算机', value:'计算机'}]


const EditS = ({store}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const fileAvatarRef = useRef();
  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }
  }, []);

  const doLogin =async()=>{
    try {
      const params = await form.validateFields();
      const r = await store.login(API_LOGIN, params)
      if (r) {
        navigate('/')
      }

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  function doClick(){
    const trig=document.getElementById('btn-file');
    console.log(form)
    trig.click();
  }

  async function doll(){
    const params = await form.validateFields();
    const r1 =  store.get(urls.API_UPLOAD,params)
  console.log(r1)
  }

  function inputFile(obj){
    console.log(obj.target.files);
  const file = obj.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    document.getElementById('avatar').src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  let formdata = new FormData()
  formdata.append("file", file)
  const r =  store.post(urls.API_UPLOAD, formdata)
  }

  
// let axiosPostRequestCancel = null
// function uploadFiles(data, progressCallBack, callBack) {
//   console.log(data)
//   let formData = new FormData();
//   formData.append("file", data);
//   let config = {
//     //添加请求头
//     headers: { "Content-Type": "multipart/form-data" },
//     timeout: 600000,
//     //添加上传进度监听事件
//     onUploadProgress: e => {
//       let completeProgress = (e.loaded / e.total * 100) | 0;
//       progressCallBack && progressCallBack(completeProgress)
//     },
//     cancelToken: new axios.CancelToken(function executor(c) {
//       axiosPostRequestCancel = c // 用于取消上传
//     })
//   };
 
//   axios.post("localhost:3000/public", formData, config)
//   .then(
//     function (response)
//     {
//       console.log(response)
//       callBack && callBack(true, response)
//     })
//     .catch(function (error) {
//       callBack && callBack(false)
//     });
// }
 
// /**
//  * [cancelAxiosRequest 取消axios post请求]
//  */
// function cancelAxiosRequest(){
//   axiosPostRequestCancel && axiosPostRequestCancel('cancel')
//   axiosPostRequestCancel = null
// }



  return (
  
    <div className={s.std}>
      <span className="g-tl">学生个人信息</span>

      <Form form={form} className={s.frm}>

        <div className={s.frml}>
          <img src={person} onClick={doClick} id="avatar" />
          <input type="file" ref={fileAvatarRef} className={s.imgInput} id="btn-file" onChange={inputFile.bind(this)}  onClick={inputFile.bind(this)} accept="image/*"></input>
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
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              defaultValue={['计算机']}
              placeholder="Please select"
              options={Speciality_OPT}
            />
          </div>
          <div className={s.attr}>
            <label>获得证书</label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              defaultValue={['英语四级证书']}
              placeholder="Please select"
              options={SKILL_OPT}
            />
          </div>
          <div className={s.attr}>
            <label>获奖情况</label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              defaultValue={[]}
              placeholder="Please select"
              options={Award_OPT}
            />
          </div>
          <div className={s.attr}>
            <label>学业规划</label>
            <section>
              <i>第一学年</i>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                defaultValue={['学习专业课程']}
                placeholder="Please select"
                options={Plan_OPT}
              />
            </section>
            <section>
              <i>第二学年</i>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                defaultValue={['研究前端技术', '跟老师做项目']}
                placeholder="Please select"
                options={Plan_OPT}
              />
            </section>
            <section>
              <i>第三学年</i>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                defaultValue={['开展社会实习', '参加竞赛']}
                placeholder="Please select"
                options={Plan_OPT}
              />
            </section>
            <section>
              <i>第四学年</i>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                defaultValue={['找工作', '考研究生']}
                placeholder="Please select"
                options={Plan_OPT}
              />
            </section>
          </div>
          <div className={s.attr}>
            <label>研究方向</label>
            <Select
              allowClear
              style={{ width: '100%' }}
              defaultValue={AREA_OPT[0].value}
              placeholder="Please select"
              options={AREA_OPT}
            />
          </div>
        </div>
      </Form>
    </div>
  )


}

export default  inject('store')(observer(EditS))