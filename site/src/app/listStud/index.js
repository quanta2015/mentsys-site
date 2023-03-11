import React, { useState, useEffect,useCallback,useRef } from 'react';
import dayjs from 'dayjs'
import jwt from '@/util/token'
import { useNavigate } from 'react-router-dom'
import {isN} from '@/util/fn'
import { toJS } from 'mobx'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import * as urls from '@/constant/urls'
import { API_SERVER } from '@/constant/apis'
import { Form, Input, Button, message,Select,notification,Modal } from 'antd'
import fileToBlob from '@/util/fileToBlob'
import UploadImg from '@/component/UploadImg'
import classnames from 'classnames';


import s from './index.module.less';
import person from '@/img/person.svg'


const ListStud = () => {
  const { store } = React.useContext(MobXProviderContext)
  const navigate = useNavigate()
  const [form] = Form.useForm()
 

  const [list,setList] = useState([])
  const [stud,setStud] = useState(null)
  const [sel,setSel] = useState(0)


  useEffect(() => {
    if (!window.token) {
      navigate('/login')
    }else{
      let params = { uid: store.user.uid }
      store.studListForMent(params).then(r=>{
        setList(r)
        if (r.length>0) {
          setStud(r[0])
        }
      })
    }
  }, []);


  // const doLoadStud =async()=>{
  //   let params = {
  //     mid: store.user.uid
  //   }

  //   let r = await store.post(urls.API_STUD_LIST, params)
  //   if (r.code === 200) {
  //     setList(r.data)
  //   }
  // }
  console.log(stud)

  const doSel =(i)=>{
    setSel(i)
    setStud(list[i])
  }

  const renderAttr = (e)=>(
    e?.split('|').map((item,i)=>
      <i>{item}</i>
    )
  )

  return (
  
    <div className={s.main}>


      <span className="g-tl">指导学生列表</span>


      <div className={s.wrap}>
        
        {list.length>0 &&
        <div className={s.list}>
          {list.map((item,i)=>
            <div key={i} className={classnames(s.item,{sel:sel===i}) } onClick={()=>doSel(i)}>
              <img src={person} />
              {/*<img src={`${API_SERVER}/img/tech/${item.uid}.jpg`} />*/}
              <span>{item.name}</span>
            </div>
          )}
        </div>}

        {list.length>0 &&
        <div className={s.detail}>
          <div className={s.sect}>基本信息</div>
          <div className={s.row}>
            <label>姓名</label>
            <span>{stud?.name}</span>
            <label>性别</label>
            <span>{stud?.sex?"男":"女"}</span>
          </div>
          <div className={s.row}>
            <label>专业</label>
            <span>{stud?.major}</span>
            <label>学院</label>
            <span>{stud?.college}</span>
          </div>
          <div className={s.row}>
            <label>学籍</label>
            <span>{stud?.grade}级</span>
            <label>班级</label>
            <span>{stud?.class}</span>
          </div>
          <div className={s.row}>
            <label>学号</label>
            <span>{stud?.uid}</span>
            <label>身份证</label>
            <span>{stud?.cert_code}</span>
          </div>
          <div className={s.row}>
            <label>邮箱</label>
            <span>{stud?.email}</span>
            <label>出生年月</label>
            <span>{stud?.brithday}</span>
          </div>
          <br/>
          <div className={s.sect}>其他信息</div>
          <div className={s.attr}>
            <label>个人特长</label>
            <span>{renderAttr(stud?.skill)}</span>
          </div>
          <div className={s.attr}>
            <label>获得证书</label>
            <span>{renderAttr(stud?.cert)}</span>
          </div>
          <div className={s.attr}>
            <label>获奖情况</label>
            <span>{renderAttr(stud?.award)}</span>
          </div>
          <div className={s.attr}>
            <label>学业规划</label>
            <section>
              <i>第一学年</i>
              <span>{renderAttr(stud?.schedule?.split('|')[0])}</span>
            </section>
            <section>
              <i>第二学年</i>
              <span>{renderAttr(stud?.schedule?.split('|')[1])}</span>
            </section>
            <section>
              <i>第三学年</i>
              <span>{renderAttr(stud?.schedule?.split('|')[2])}</span>
            </section>
            <section>
              <i>第四学年</i>
              <span>{renderAttr(stud?.schedule?.split('|')[3])}</span>
            </section>
          </div>
          <div className={s.attr}>
            <label>研究方向</label>
            <span>{stud?.field}</span>
          </div>
        </div>}

        {list.length==0 &&
         <div className={s.none}>暂无学生</div>
        }

      </div>
    </div>
  )


}

export default observer(ListStud)













