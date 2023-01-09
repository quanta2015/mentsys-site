import { API_SERVER } from './apis'


export const API_LOGIN     = API_SERVER + '/login'
export const API_LOAD_PROJ = API_SERVER + '/loadProj'



export const MENU_LIST = [
  {t:0, k: '更新导师信息', v: '/editT'},
  {t:0, k: '浏览指导学生', v: '/mentS'},
  {t:0, k: '更换指导学生', v: '/changeS'},
  {t:0, k: '预约交流指导', v: '/orderMent'},

  {t:1, k: '更新学业信息', v: '/editS'},
  {t:1, k: '选择学习方向', v: '/selectArea'},
  {t:1, k: '更换学习方向', v: '/changeArea'},
  {t:1, k: '评价导师',    v: '/evalT'},
  
  {t:2, k: '查看导师信息', v: '/queryT'},
  {t:2, k: '查看学生信息', v: '/mentS'},
  {t:2, k: '审核指导请求', v: '/audit'},
  {t:2, k: '设置系统参数', v: '/config'},
]


const SKILL_LIST = ["教师资格证","计算机二级证书","英语四级","英语六级","ACM 一等奖","ACM 二等奖","ACM 三等奖","机动车驾驶证","普通话等级证书","三好学生证书","优秀毕业生证书","优秀学生干部证书","英语中高级口译","托福TOFEL","雅思IELTS","托业TOEIC","GRE/GMAT","日本语JLPT N1","日本语JLPT N2","韩国语能力考试","EI论文","SCI论文","发明专利证书"]

const AREA_LIST = ["前端方向","后端方向","人工智能方向","多媒体方向","竞赛方向","研究方向"]

const toOpt = (list) =>  list.map((item,i)=> item = {label:item, value: item} )

export const SKILL_OPT = toOpt(SKILL_LIST)
export const AREA_OPT = toOpt(AREA_LIST)
