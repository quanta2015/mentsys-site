import { API_SERVER } from './apis'


export const API_LOGIN = API_SERVER + '/login'
export const API_TEST = API_SERVER + '/name'



export const MENU_LIST = [
  {t:0, k: '更新导师信息', v: '/editT'},
  {t:0, k: '指导学生信息', v: '/mentS'},
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

const Plan_List=["学习专业课程","研究前端技术","研究后端技术","跟老师做项目","参加竞赛","开展社会实习","找工作","考研","加入社团/组织","在社团/组织中担任领导，锻炼自己","考雅思","担任班干部"]
const Speciality_List=["轮滑","篮球","排球","足球","羽毛球","乒乓球","网球","计算机","音乐","围棋","象棋","跆拳道","跳舞","绘画","书法","游泳","社交","爬山","PS","PR","XD","3dMax","Unity"]
const Award_List=["ACM 一等奖","ACM 二等奖","ACM 三等奖","ICPC 一等奖","ICPC 二等奖","ICPC 三等奖","计算机设计大赛 一等奖","计算机设计大赛 二等奖","计算机设计大赛 三等奖","电子设计竞赛 一等奖","电子设计竞赛 二等奖","电子设计竞赛 三等奖","服务外包 一等奖","服务外包 二等奖","服务外包 三等奖","多媒体 一等奖","多媒体 二等奖","多媒体 三等奖"]
const SKILL_LIST = ["教师资格证","计算机二级证书","英语四级","英语六级","ACM 一等奖","ACM 二等奖","ACM 三等奖","机动车驾驶证","普通话等级证书","三好学生证书","优秀毕业生证书","优秀学生干部证书","英语中高级口译","托福TOFEL","雅思IELTS","托业TOEIC","GRE/GMAT","日本语JLPT N1","日本语JLPT N2","韩国语能力考试","EI论文","SCI论文","发明专利证书"]

const AREA_LIST = ["前端方向","后端方向","人工智能方向","多媒体方向","竞赛方向","研究方向"]

const toOpt = (list) =>  list.map((item,i)=> item = {label:item, value: item} )

export const Plan_OPT=toOpt(Plan_List)
export const Speciality_OPT=toOpt(Speciality_List)
export const Award_OPT=toOpt(Award_List)
export const SKILL_OPT = toOpt(SKILL_LIST)
export const AREA_OPT = toOpt(AREA_LIST)

