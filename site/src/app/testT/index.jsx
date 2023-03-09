import React from "react";
import s from "./index.module.less";
import { useNavigate, useParams } from "react-router-dom";
const TestT = () => {
  const navigate = useNavigate();
  // 思想育人 科研育人 创新创业育人 实践育人 其他课外育人
  const grade = [
    { name: "思想育人", grade: "A" },
    { name: "科研育人", grade: "A" },
    { name: "创新创业育人", grade: "A" },
    { name: "实践育人", grade: "A" },
    { name: "其他课外育人", grade: "A" },
  ];
  return (
    <div className={s.main}>
      <span className="g-tl">导师测评</span>
      <div className={s.cnt}>
        {grade.map((item, index) => {
          return (
            <div
              className={s.card}
              onClick={() => {
                navigate("test/" + index);
              }}
              key={index}
            >
              <div className={s.mlt}>{item.name}</div>
              <div className={s.mrt}>{item.grade}</div>
            </div>
          );
        })}

        <div className={s.card}>
          <div className={s.mlt}>{"总评分"}</div>
          <div className={s.mrt}>{"A"}</div>
        </div>
      </div>
    </div>
  );
};

export default TestT;
