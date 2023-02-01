import { observable, action,makeAutoObservable } from 'mobx'
import BaseActions from '@/component/BaseActions'
import { message } from 'antd'
import { toJS } from 'mobx'
import { isN } from '@/util/fn.js'
import {get,post} from '@/util/net.js'
import req from '@/util/request.js'
import {saveToken} from '@/util/token'
import * as urls from '@/constant/urls'


class Store {
  constructor() {
    makeAutoObservable(this);
  }

  user = null
  projr = []
  projh = []
  docs = []


  setUserObj(o) {
    this.user = o

    if (o.role===1) {
      let schedule = isN(o.schedule)?[]:o.schedule.split('|')
      schedule.map((item,i)=>{ schedule[i]=item.split('&')  })
      this.user.skill    = isN(o.skill)?[]:o.skill.split('|')
      this.user.cert     = isN(o.cert)?[]:o.cert.split('|')
      this.user.award    = isN(o.award)?[]:o.award.split('|')
      this.user.schedule = isN(o.schedule)?[[],[],[],[]]:schedule
    }else if (o.role===0) {
      this.user.area     = isN(o.area)?[]:o.area.split('|')
    }
    console.log(toJS(this.user))
  }

  setUserVal(v,attr) {
    this.user[attr] = v
  }

  setUserSchedule(v,attr) {
    this.user.schedule[attr] = v
  }

  async post(url, params) {
    return await post(url,params)
  }

  async get(url, params) {
    return await get(url,params)
  }

  async login(url, params) {
    const r = await this.post(url, params)
    if (r.code === 200) {
      message.info('登录成功！')
      window.token = r.token
      this.setUserObj(r.data)
      return true
    }else{
      message.error(r.msg)
      return false
    }

  }

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