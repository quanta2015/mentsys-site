import { Divider ,Button} from "antd"
import { inject, observer } from "mobx-react"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import s from './index.module.less'




const SelectArea = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!window.token){
            navigate('/login')
        }else{

        }
    },[]);
    return(
        <div className={s.std}>
            <span className="g-tl">选择学习方向</span>

            <div className={s.body}>
                <div className={s.first}>
                    <div>
                        <h1>前端方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                    <div>
                        <h1>后端方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                    <div>
                        <h1>人工智能方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                </div>
                <div className={s.second}>
                    <div>
                        <h1>多媒体方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                    <div>
                        <h1>竞赛方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                    <div>
                        <h1>研究方向</h1>
                        <div>
                            <Button>确定选择</Button>
                        </div>
                    </div>
                </div>
                <div className={s.fun}>
                    <Button>保存</Button>
                </div>
            </div>
        </div>
    )
}
// 在导出组件之前,使用高阶组件把store注入props中并添加观察者
export default inject('store')(observer(SelectArea))
// observer功能：当可观察数据发生变化时，组件会自动响应，并重新渲染