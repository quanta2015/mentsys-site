import { inject,observer,MobXProviderContext } from 'mobx-react'
import React, { useState, useEffect,useCallback,useRef } from 'react';
import {useNavigate } from 'react-router-dom'
import { DatePicker, Select, Space, TimePicker ,Form,Button,Checkbox} from 'antd';
import o from './index.module.less'
import moment from 'moment';
import classnames from 'classnames';
import person from '@/img/person.svg'

const OrderMent = ()=>{
    const { store } = React.useContext(MobXProviderContext)
    const navigate = useNavigate();
    const [form] = Form.useForm();//通过 Form.useForm 对表单数据域进行交互。
    const [form1] = Form.useForm();
    const format = 'HH:mm'

    const[list,setList] = useState([])
    const[sel,setSel] = useState([0,1,2,3,4,5,6,7,8,9])
    const[tids,setTids] = useState([])

    useEffect(()=>{
        if(!window.token){
            navigate('/login')
        }else{
            let params = { uid:store.user.uid}
            store.studListForMent(params).then(r=>{
                console.log(r)
                setList(r)
            })
        }
    },[])

 

    const doSel = (i)=>{
        sel.includes(i)? setSel(sel.filter(num=>num != i)): setSel([...sel,i])
        console.log("sel:"+sel)
    }
    //获取接受消息的学生学号
    const gettids = async()=>{
        list.forEach((value,index,obj)=>{
            if(sel.includes(index)&&!tids.includes(value.uid)){
                setTids([...tids,value.uid])
            }
        })
    }
    //确认发送事件
    const sentInfo= async()=>{
        try{
            alert("测试数据成功")
            const params = await form.validateFields();
            params.time = form.getFieldValue('time').format("HH:mm");
            params.pdate = moment(form.getFieldValue("pdate")).format("YYYY-MM-DD")+":"+params.time;
            params.fid = store.user.uid;
            params.tid = tids.join("|")
            await gettids();
            console.log(params);
        }catch(errorInfo){
            console.log('Failed:',errorInfo);
        }
    }
    const data = 
        [
            {
                value:"勤园13-201"
            },
            {
                value:"勤园13-202"
            },
            {
                value:"勤园13-203"
            },
        ]
    
    return(
        <div className={o.index}>
            <span className='g-tl'>预约交流指导</span>
            <div className={o.wrap}>
                {list.length>0 && 
                <div className={o.list}>
                    {list.map((item,i)=>
                        <div key={i} className={classnames(o.item,{sel:sel.includes(i)}) } onClick={()=>doSel(i)}>  
                            <img src={person} />
                            <span>{item.name}</span>
                            {/* <div className={o.ck}>
                                <span>接收人：</span>
                                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
                            </div>  */}
                        </div> 
                    )}
                </div>
                }
           
            <div className={o.detail}>
            <Form form={form} className={o.frm}>
                <div className={o.date}>
                    <label>日期选择</label>
                    <Form.Item name='pdate' rules={[{required:true,message:'请选择日期'}]}>
                    <DatePicker style={{width:'500px'}}></DatePicker>
                    </Form.Item>
                </div>
                <div className={o.time}>
                    <label>时间选择</label>
                    <Form.Item name='time' rules={[{required:true,message:'请选择时间'}]}>
                      <TimePicker format={format} style={{width:"500px"}}></TimePicker>
                    </Form.Item>
                </div>
                <div className={o.place}>
                    <label>地点选择</label>
                    <Form.Item name="paddr" initialValue="勤园13-201" rules={[{ required: true, message: '请选择指导地点'}]}>
                     <Select
                         allowClear
                             style={{ width: '500px' }}                       
                            placeholder="Please select"
                             options={data}
                            />
                    </Form.Item>
                </div>
                <div className={o.fun}>
                    <Button type="primary" size="large" onClick={sentInfo}>确认发送</Button>
                </div>
            </Form>
            </div>
            </div>
        </div>
    )
}

export default inject('store')(observer(OrderMent))
