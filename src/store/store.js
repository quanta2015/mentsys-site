import { observable, action } from 'mobx'
import BaseActions from '@/component/BaseActions'
import { message } from 'antd'
import { isN } from '@/util/fn.js'
import req from '@/util/request.js'
import {saveToken} from '@/util/token'
import * as urls from '@/constant/urls'


class Store extends BaseActions {
  @observable user = null
  @observable projr = []
  @observable projh = []
  @observable docs = []


  @action
  async post(url, params) {
    return await this.post(url,params)
  }

  @action
  async get(url, params) {
    return await this.get(url,params)
  }

  @action
  async login(url, params) {
    const r = await this.post(url, params)
    if (r.code === 200) {
      message.info('登录成功！')
      window.token = r.token
      // saveToken(r.token)
      this.user = r.data
      console.log(this.user)
      return true
    }else{
      message.error(r.msg)
      return false
    }
  }

  @action
  async loadProj() {
    const r = await this.post(urls.API_LOAD_PROJ)
    console.log(r)
    // this.projr = r.projr
    // this.projh = r.projh
    // this.docs  = r.docs
    return r
  }


}

export default new Store()