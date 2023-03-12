import { API_SERVER } from "./apis";

export const API_LOGIN = API_SERVER + "/login";
export const API_MENU_LOAD = API_SERVER + "/menuLoad";
export const API_LOAD_PROJ = API_SERVER + "/loadProj";
export const API_UPLOAD = API_SERVER + "/upload";
export const API_STUD_SAVE = API_SERVER + "/studSave";
export const API_TECH_SAVE = API_SERVER + "/techSave";

export const API_MENT_LOAD = API_SERVER + "/mentLoad";
export const API_MENT_SAVE = API_SERVER + "/mentSave";
export const API_MENT_CLEAR = API_SERVER + "/mentClear";
export const API_MENT_DETAIL_LOAD = API_SERVER + "/mentDetailLoad";

export const API_MARK_LOAD = API_SERVER + "/markLoad";
export const API_MARK_SAVE = API_SERVER + "/markSave";

export const API_STUD_LIST_FOR_MENT = API_SERVER + "/studListForMent";
export const API_MENTLIST_LOAD = API_SERVER + "/mentList";

const SKILL_LIST = [
  "轮滑",
  "篮球",
  "排球",
  "足球",
  "羽毛球",
  "乒乓球",
  "网球",
  "计算机",
  "音乐",
  "围棋",
  "象棋",
  "跆拳道",
  "跳舞",
  "绘画",
  "书法",
  "游泳",
  "社交",
  "爬山",
  "PS",
  "PR",
  "XD",
  "3dMax",
  "Unity",
];
const CERT_LIST = [
  "教师资格证",
  "计算机二级证书",
  "英语四级",
  "英语六级",
  "机动车驾驶证",
  "普通话等级证书",
  "三好学生证书",
  "优秀毕业生证书",
  "优秀学生干部证书",
  "英语中高级口译",
  "托福TOFEL",
  "雅思IELTS",
  "托业TOEIC",
  "GRE/GMAT",
  "日本语JLPT N1",
  "日本语JLPT N2",
  "韩国语能力考试",
  "EI论文",
  "SCI论文",
  "发明专利证书",
];
const AREA_LIST = [
  "前端方向",
  "后端方向",
  "人工智能方向",
  "多媒体方向",
  "竞赛方向",
  "研究方向",
];
const AWARD_LIST = [
  "ACM 一等奖",
  "ACM 二等奖",
  "ACM 三等奖",
  "ICPC 一等奖",
  "ICPC 二等奖",
  "ICPC 三等奖",
  "计算机设计大赛 一等奖",
  "计算机设计大赛 二等奖",
  "计算机设计大赛 三等奖",
  "电子设计竞赛 一等奖",
  "电子设计竞赛 二等奖",
  "电子设计竞赛 三等奖",
  "服务外包 一等奖",
  "服务外包 二等奖",
  "服务外包 三等奖",
  "多媒体 一等奖",
  "多媒体 二等奖",
  "多媒体 三等奖",
];
const SCHE_LIST = [
  "学习专业课程",
  "研究前端技术",
  "研究后端技术",
  "跟老师做项目",
  "参加竞赛",
  "开展社会实习",
  "找工作",
  "考研",
  "加入社团/组织",
  "在社团/组织中担任领导，锻炼自己",
  "考雅思",
  "担任班干部",
];

const toOpt = (list) =>
  list.map((item, i) => (item = { label: item, value: item }));

export const SKILL_OPT = toOpt(SKILL_LIST);
export const CERT_OPT = toOpt(CERT_LIST);
export const AREA_OPT = toOpt(AREA_LIST);
export const AWARD_OPT = toOpt(AWARD_LIST);
export const SCHE_OPT = toOpt(SCHE_LIST);

export const FIELD_OPT = [
  {
    label: "计算机科学理论",
    options: [
      { label: "计算理论", value: "计算理论" },
      { label: "并行计算", value: "并行计算" },
      { label: "人工智能", value: "人工智能" },
      { label: "程序设计语言", value: "程序设计语言" },
      { label: "计算机图形学", value: "计算机图形学" },
    ],
  },
  {
    label: "计算机系统结构",
    options: [
      { label: "体系结构", value: "体系结构" },
      { label: "面向对象", value: "面向对象" },
      { label: "软件工程", value: "软件工程" },
      { label: "计算机系统", value: "计算机系统" },
      { label: "网络与通讯", value: "网络与通讯" },
      { label: "大规模计算", value: "大规模计算" },
      { label: "软件质量控制", value: "软件质量控制" },
      { label: "网络信息安全", value: "网络信息安全" },
      { label: "实时系统与嵌入式系统", value: "实时系统与嵌入式系统" },
      { label: "数据库系统和数据挖掘", value: "数据库系统和数据挖掘" },
    ],
  },
  {
    label: "计算机应用",
    options: [
      { label: "多媒体", value: "多媒体" },
      { label: "电子商务", value: "电子商务" },
      { label: "人机交互", value: "人机交互" },
      { label: "计算机应用", value: "计算机应用" },
      { label: "计算机教育", value: "计算机教育" },
      { label: "科学与工程计算", value: "科学与工程计算" },
    ],
  },
];

export const FORM_LIST = [
  {
    name: "学期初是否与联系学生见面",
    list: [
      { m: "是", v: 30 },
      { m: "否", v: 0 },
    ],
  },
  {
    name: "每学期与该生联系次数(交谈形式：面谈、网聊或集体交流)",
    list: [
      { m: "1次", v: 10 },
      { m: "2次", v: 20 },
      { m: "≥3次", v: 30 },
    ],
  },
  {
    name: "为人师表，通过言传身教，引导、帮助学生树立正确的人生观、价值观和世界观，做学生的人生和学生导师",
    list: [
      { m: "优秀", v: 10 },
      { m: "良好", v: 8 },
      { m: "中等", v: 6 },
      { m: "及格", v: 4 },
      { m: "不及格", v: 2 },
    ],
  },
  {
    name: "指导学生合理安排学习进程和学业规划，包括按照教学计划指导学生个性化选择学习专业方向、选课等",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
  {
    name: "培养学生刻苦学习的精神和严谨治学的态度",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
  {
    name: "培养学生专业创新精神、创业意识、创新创业能力 ",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
  {
    name: "引导学生建立学习规划和增加学生对专业的兴趣，指导学生科学规划职业生涯。",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
  {
    name: "指导学生明晰专业兴趣方向或领域，在专业方向或领域进行初步实践，指导学生参加课外科技活动及各类竞赛活动等。",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
  {
    name: "根据不同年级学生的实际情况和教学目标，给予相应指导，帮助学生完善学习方法。",
    list: [
      { m: "优秀", v: 5 },
      { m: "良好", v: 4 },
      { m: "中等", v: 3 },
      { m: "及格", v: 2 },
      { m: "不及格", v: 1 },
    ],
  },
];

export const EDU_STU_LIST = [
  [
    {
      name: "担任本科学生班主任",
      list: [
        { m: "优秀", v: 25 },
        { m: "良好", v: 20 },
        { m: "合格", v: 15 },
        { m: "不合格", v: 0 },
      ],
    },
    {
      name: "担任兼职辅导员",
      list: [
        { m: "优秀", v: 25 },
        { m: "合格", v: 20 },
        { m: "不合格", v: 0 },
      ],
    },
    {
      name: "担任本科学生综合导师",
      list: [],
      input: { i: "所带本科生数", v: 2 },
    },
    {
      name: "担任研究生导师",
      list: [],
      input: { i: "所带本院研究生数(外院记0.5名)", v: 2 },
    },
    {
      name: "担任党支部书记、党支部委员",
      list: [
        { m: "党支部书记", v: 20 },
        { m: "党支部委员", v: 10 },
        { m: "未担任", v: 0 },
      ],
    },
    {
      name: "育人先进",
      list: [],
      input: { i: "输入获得分数", v: 1 },
    },
    {
      name: "担任党校、团校等培训或思政教育专题报告、沙龙活动等主讲教师",
      list: [],
      input: { i: "活动天数", v: 6 },
    },
  ],
  [
    {
      name: "指导本科学生发表论文",
      list: [],
      input: { i: "该项分数", v: 1 },
    },
    {
      name: "为学生举行各类专业报告会、研讨会、讲座、论坛",
      list: [],
      input: { i: "举办天数", v: 6 },
    },
    {
      name: "带领和指导学生参加各类校外学术交流的",
      list: [],
      input: { i: "参加天数", v: 6 },
    },
  ],
  [
    {
      name: "指导学生完成校级、省级和国家级创新创业项目结题的",
      list: [],
      input: { i: "项目数（校级、省级、国家级分别记为1、2、3）", v: 1 },
    },
    {
      name: "担任学生竞赛活动指导教师，指导学校组织的学科竞赛",
      list: [],
      input: { i: "该项分数", v: 1 },
    },
    {
      name: "指导学生申请专利",
      list: [],
      input: { i: "申请专利数", v: 3 },
    },
    {
      name: "指导学生入驻学院创新基地，并经年度考核合格",
      list: [],
      input: { i: "入驻项目数", v: 5 },
    },
  ],
  [
    {
      name: "担任学生社团指导教师",
      list: [],
      input: { i: "合格社团数", v: 10 },
    },
    {
      name: "担任社会实践指导教师",
      list: [],
      input: { i: "带队指导活动天数", v: 2, m: 10 },
    },

    {
      name: "担任学生非教学活动评审或辅导工作",
      list: [],
      input: { i: "评审或辅导工作天数", v: 4 },
    },
  ],
  [
    {
      name: "以上考核内容中未明确说明的其他涉及教师课外育人相关工作(如招生宣传、志愿服务、公益活动等)",
      list: [],
      input: { i: "参考分数", v: 1 },
    },
  ],
];
