import React, { useState, useEffect, useCallback, useRef } from "react";
import { inject, observer, MobXProviderContext } from "mobx-react";
import s from "./index.module.less";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const TechBasic = ({ user, edit = true }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={s.sect}>基本信息</div>
      <div className={s.row}>
        <label>姓名</label>
        <span>{user?.name}</span>
        <label>工号</label>
        <span>{user?.uid}</span>
      </div>
      <div className={s.row}>
        <label>邮箱</label>
        <span>{user?.email}</span>
        <label>身份证</label>
        <span>{user?.cert_code}</span>
      </div>

      {!edit && (
        <div className={s.row}>
          <label>研究方向</label>
          <span>{user?.area}</span>
          <label>指导方向</label>
          <span>{user?.field}</span>
        </div>
      )}

      <div className={s.row}>
        <label>联系方式</label>
        <span>{user?.phone}</span>
      </div>
      <div className="testT">
        <Button
          onClick={() => {
            navigate(`/testT/${user?.name}/${user?.uid}`);
          }}
        >
          test
        </Button>
      </div>
    </>
  );
};

export default inject("store")(observer(TechBasic));
