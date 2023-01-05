import { observable, action } from 'mobx'
import BaseActions from '@/component/BaseActions'
import { message } from 'antd'
import { isN } from '@/util/fn.js'
import req from '@/util/request.js'
import {saveToken} from '@/util/token'


class Store extends BaseActions {
  @observable user = null



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
      saveToken(r.token)
      this.user = r.data
      return true
    }else{
      message.error(r.msg)
      return false
    }

  }


}

export default new Store()