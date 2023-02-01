import React, { useState, useEffect,useCallback,useRef } from 'react';
import {isN} from '@/util/fn'
import { inject,observer,MobXProviderContext } from 'mobx-react'
import { API_UPLOAD } from '@/constant/urls'
import { API_SERVER } from '@/constant/apis'
import fileToBlob from '@/util/fileToBlob'
import { message } from 'antd'

import s from './index.module.less';

import person from '@/img/person.svg'



const UploadImg = ({width, height}) => {
  const { store } = React.useContext(MobXProviderContext);


  useEffect(() => {
    
  }, []);

  const importPhoto = async (e)=>{
    if (e.target.files.length > 0) {
      let file = e.target.files[0]


      const blob = await fileToBlob(file, width, height, 0.7)

      let formData = new FormData()
      let filetype = 'user'
      formData.append('file', blob, filetype)
      
      let r = await store.post(API_UPLOAD, formData)
      console.log(r)
      if (r.code === 200) {
        store.setUserVal(r.data.path, 'img')
        console.log(store)
        message.info('上传图片成功')
      } else {
        message.error(r.msg)
      }
    }
  }

  return (
    <div className={s.uploadImg} style={{ 'height':height }}>
      <input type="file" accept="image/*;" capture="user" onChange={importPhoto} />
      <img src={isN(store.user?.img)?person:`${API_SERVER}/${store.user?.img}`} />
    </div>
  )
}

export default  observer(UploadImg)












