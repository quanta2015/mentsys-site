import decode from 'jwt-decode'


const TOKEN_KEY = 'MENT_SYS_TOKEN'
const USER_KEY  = 'MENT_SYS_USER'

export const loadToken = () => {
  return window.localStorage.getItem(TOKEN_KEY)
}

export const saveToken = (token) => {
  return window.localStorage.setItem(TOKEN_KEY,token)
}


export const removeUser = () => {
  window.localStorage.removeItem(USER_KEY)
}

export const loadUser = () => {
  //JSON字符串转JS对象
  return JSON.parse(window.localStorage.getItem(USER_KEY))
}

export const saveUser = (data) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(data))
}


export default { loadUser, saveUser, removeUser, loadToken,saveToken }