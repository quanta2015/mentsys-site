import { observable, action } from 'mobx'
import { message } from 'antd'
import { isN } from '@/util/fn.js'
import req from '@/util/request.js'


const SEASON_KEY = 'MENT_SYSTEM'


class Store {
  @observable
  user = null

  @action
  async post(url, params) {
    return await req(url,params)
  }


}

export default new Store()