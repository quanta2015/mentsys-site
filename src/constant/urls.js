import { API_SERVER } from './apis'


export const API_LOGIN     = API_SERVER + '/login'
export const API_LOAD_PROJ = API_SERVER + '/loadProj'
export const API_UPLOAD    = API_SERVER + '/upload'
export const API_STUD_SAVE = API_SERVER + '/studSave'
export const API_TECH_SAVE = API_SERVER + '/techSave'



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

const SKILL_LIST = ["HTML5","CSS3","MYSQL","JAVA","C#","C++","C","REACT","VUE","PYTHON","PHP","JQuery","Node.js","Bootstrap","Android","Oracle"]
const CERT_LIST  = ["教师资格证","计算机二级证书","英语四级","英语六级","机动车驾驶证","普通话等级证书","三好学生证书","优秀毕业生证书","优秀学生干部证书","英语中高级口译","托福TOFEL","雅思IELTS","托业TOEIC","GRE/GMAT","日本语JLPT N1","日本语JLPT N2","韩国语能力考试","EI论文","SCI论文","发明专利证书"]
const AREA_LIST  = ["前端方向","后端方向","人工智能方向","多媒体方向","竞赛方向","研究方向"]
const AWARD_LIST = ["ACM 一等奖","ACM 二等奖","ACM 三等奖","ICPC 一等奖","ICPC 二等奖","ICPC 三等奖","计算机设计大赛 一等奖","计算机设计大赛 二等奖","计算机设计大赛 三等奖","电子设计竞赛 一等奖","电子设计竞赛 二等奖","电子设计竞赛 三等奖","服务外包 一等奖","服务外包 二等奖","服务外包 三等奖","多媒体 一等奖","多媒体 二等奖","多媒体 三等奖"]
const SCHE_LIST = ["学习专业课程","研究前端技术","研究后端技术","跟老师做项目","参加竞赛","开展社会实习","找工作","考研","加入社团/组织","在社团/组织中担任领导，锻炼自己","考雅思","担任班干部"]

const toOpt = (list) =>  list.map((item,i)=> item = {label:item, value: item} )


export const Award_OPT=toOpt(AWARD_LIST)
export const SKILL_OPT = toOpt(SKILL_LIST)
export const CERT_OPT  = toOpt(CERT_LIST)
export const AERA_OPT  = toOpt(AREA_LIST)
export const AWARD_OPT = toOpt(AWARD_LIST)
export const SCHE_OPT  = toOpt(SCHE_LIST)




export const FIELD_OPT = [
  { label: '计算机科学理论',
    options: [
      { label: '计算理论', value: '计算理论' },
      { label: '并行计算', value: '并行计算' },
      { label: '人工智能', value: '人工智能' },
      { label: '程序设计语言', value: '程序设计语言' },
      { label: '计算机图形学', value: '计算机图形学' },
    ],
  },{
    label: 'Engineer',
    options: [
      { label: '体系结构', value: '体系结构' },
      { label: '面向对象', value: '面向对象' },
      { label: '软件工程', value: '软件工程' },
      { label: '计算机系统', value: '计算机系统' },
      { label: '网络与通讯', value: '网络与通讯' },
      { label: '大规模计算', value: '大规模计算' },
      { label: '软件质量控制', value: '软件质量控制' },
      { label: '网络信息安全', value: '网络信息安全' },
      { label: '实时系统与嵌入式系统', value: '实时系统与嵌入式系统' },
      { label: '数据库系统和数据挖掘', value: '数据库系统和数据挖掘' },
    ],
  },{
    label: 'Engineer',
    options: [
      { label: '多媒体', value: '多媒体' },
      { label: '电子商务', value: '电子商务' },
      { label: '人机交互', value: '人机交互' },
      { label: '计算机应用', value: '计算机应用' },
      { label: '计算机教育', value: '计算机教育' },
      { label: '科学与工程计算', value: '科学与工程计算' },
    ],
  },
]


















export const AREA_OPT = toOpt(AREA_LIST)

