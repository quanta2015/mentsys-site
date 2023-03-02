import React, { useState, useEffect, useCallback, useRef } from "react";
import dayjs from "dayjs";
import { loadToken } from "@/util/token";
import { useNavigate } from "react-router-dom";
import { isN } from "@/util/fn";
import { toJS } from "mobx";
import { inject, observer, MobXProviderContext } from "mobx-react";
import * as urls from "@/constant/urls";
import { API_SERVER } from "@/constant/apis";
import {
  Form,
  Input,
  Button,
  message,
  Select,
  notification,
  Modal,
} from "antd";
import fileToBlob from "@/util/fileToBlob";
import UploadImg from "@/component/UploadImg";
import classnames from "classnames";
import Detail from "@/component/Detail";

import s from "./index.module.less";
import person from "@/img/person.svg";

const EditS = () => {
  const { store } = React.useContext(MobXProviderContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [sel, setSel] = useState(0);
  const [projh, setProjh] = useState([]);
  const [projr, setProjr] = useState([]);
  const [docs, setDocs] = useState([]);

  const [confirm, setConfirm] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const notify = (msg) => {
    api["warning"]({
      message: "提示信息",
      description: msg,
    });
  };

  useEffect(() => {
    if (!loadToken()) {
      navigate("/login");
    }
  }, []);

  const doSelMent = async (i) => {
    setSel(i);

    let params = { uid: list[i].uid };
    let r = await store.post(urls.API_MENT_DETAIL_LOAD, params);
    if (r.code === 200) {
      setProjh(r.projh);
      setProjr(r.projr);
      setDocs(r.docs);
    }
  };

  const doLoadMent = async () => {
    let params = {
      field: store.user.field,
    };
    let r = await store.post(urls.API_MENT_LOAD, params);
    if (r.code === 200) {
      setList(r.data);
      setShow(true);
      setProjh(r.projh);
      setProjr(r.projr);
      setDocs(r.docs);
    }
  };

  const doSaveMent = async () => {
    let params = {
      mid: list[sel].uid,
    };
    let r = await store.post(urls.API_MENT_SAVE, params);

    console.log(r);
    if (r.code === 200) {
      store.setUserObj(r.data);
    } else {
      notify(r.msg);
    }
    setConfirm(false);
  };

  const renderModal = () => (
    <Modal
      title="Basic Modal"
      open={confirm}
      onOk={() => doSaveMent(true)}
      onCancel={() => setConfirm(false)}
    >
      <p>确认选择该导师吗？</p>
      <p>选择之后无法更换，请慎重考虑！</p>
    </Modal>
  );

  return (
    <div className={s.main}>
      {contextHolder}

      {renderModal()}

      <span className="g-tl">选择学业导师</span>

      {!isN(store.user.mid) && (
        <div className={s.finish}>
          <span>您的学业导师</span>
          <div className={classnames(s.item, "sel")}>
            <img src={`${API_SERVER}/img/tech/${store.user.mid}.jpg`} />
            <span>{store.user.mname}</span>
          </div>
        </div>
      )}

      <div className={s.menu}>
        <Button type="primary" onClick={doLoadMent}>
          刷新导师列表
        </Button>
        <Button type="primary" onClick={() => setConfirm(true)}>
          确定就业导师
        </Button>
      </div>

      {!show && (
        <div className={s.desc}>
          <p>{store.user?.field}</p>

          <div className={s.wrap}>
            <span>人工智能可分为六个研究方向：</span>
            <li>1、机器视觉，包括3D重建，模式识别，图像理解等。</li>
            <li>
              2、语言理解和沟通，包括语音识别，综合，人机对话，机器翻译等;
            </li>
            <li>3、机器人技术，包括力学，控制，设计，运动规划，任务规划等;</li>
            <li>4、认知和推理，包括各种身体和社会常识的认知和推理;</li>
            <li>
              5、游戏和道德，包括多智能体，机器人和社会整合的互动，对抗和合作;
            </li>
            <li>6、机器学习，包括各种统计建模，分析工具和计算方法</li>
          </div>

          <div className={s.warn}>
            注意事项：每个学生有3次选择导师的机会，按下确认之后即使用一次机会，请慎重使用。
          </div>

          <div className={s.fun}>
            <Button type="primary" onClick={doLoadMent}>
              确认选择导师
            </Button>
          </div>
        </div>
      )}

      {show && (
        <div className={s.ret}>
          <div className={s.list}>
            {list.map((item, i) => (
              <div
                key={i}
                className={classnames(s.item, { sel: sel === i })}
                onClick={() => doSelMent(i)}
              >
                <img src={`${API_SERVER}/img/tech/${item.uid}.jpg`} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className={s.detail}>
            {projh.length + projr.length + docs.length === 0 && (
              <div className={s.none}>该导师没有详细信息</div>
            )}
            <Detail projh={projh} projr={projr} docs={docs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(EditS);
