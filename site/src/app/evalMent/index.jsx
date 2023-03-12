import React, { useEffect } from "react";
import s from "./index.module.less";
import { useParams } from "react-router-dom";
import {
  Tabs,
  Form,
  Input,
  Checkbox,
  DatePicker,
  Select,
  InputNumber,
  Button,
  Radio,
} from "antd";
import { EDU_STU_LIST } from "@/constant/urls";

const EvalMent = () => {
  const [form] = Form.useForm();
  const [grade, setGrade] = React.useState(Array(5).fill(0));
  const [gradearr, setGradearr] = React.useState(() => {
    let arr = [];
    EDU_STU_LIST.forEach((item) => {
      arr.push(Array(item.length).fill(0));
    });
    return arr;
  });

  const getsum = (val, index) => {
    setGradearr((gradearr) => {
      gradearr[activeKey][index] = val;
      setGrade((grade) => {
        let newgrade = [...grade];
        newgrade[activeKey] = eval(
          gradearr[activeKey].toString().split(",").join("+")
        );
        return newgrade;
      });
      return gradearr;
    });
  };

  const checkhalf = (value) => {
    if (value) {
      return Math.floor(value * 2) / 2;
    }
    return value;
  };

  const [activeKey, setActiveKey] = React.useState(0);
  const { name, id, uid } = useParams();
  // 思想育人 科研育人 创新创业育人 实践育人 其他课外育人
  const renderContent = (item) => {
    return (
      <div className={s.mform}>
        <div className={s.tit}>
          {`信息科学与技术学院${item.label}考核表`}
          <div className={s.sp}>{`总分：${grade[activeKey]}`}</div>
        </div>

        <div>
          {EDU_STU_LIST[activeKey]?.map((item, index) => {
            return (
              <>
                <Form.Item
                  label={item.name}
                  rules={[{ required: true, message: "必填" }]}
                  key={item.index}
                  name={`${activeKey}_${index}`}
                >
                  {item.list.length > 0 ? (
                    <Radio.Group
                      onChange={(e) => {
                        getsum(e.target.value, index);
                      }}
                    >
                      {item.list.map((i, index) => {
                        return (
                          <Radio.Button value={i.v} key={index}>
                            {i.m}
                          </Radio.Button>
                        );
                      })}
                    </Radio.Group>
                  ) : (
                    item.input && (
                      <InputNumber
                        min={0}
                        max={item.input.m ?? undefined}
                        step={0.5}
                        formatter={checkhalf}
                        style={{ width: "100%" }}
                        placeholder={`请输入${item.input.i}`}
                        key={index}
                        onChange={(e) => {
                          getsum(e * item.input.v, index);
                        }}
                      />
                    )
                  )}
                </Form.Item>
              </>
            );
          })}
        </div>
        <div className={s.mft}>
          <Button
            type="primary"
            onClick={() => {
              console.log(form.getFieldsValue());
              console.log(grade, gradearr);
            }}
          >
            保存
          </Button>
        </div>
      </div>
    );
  };

  const items = [
    {
      key: 0,
      label: `思想育人`,
      children: renderContent({ label: `思想育人`, key: "1" }),
    },
    {
      key: 1,
      label: `科研育人`,
      children: renderContent({ label: `科研育人`, key: "2" }),
    },
    {
      key: 2,
      label: `创新创业育人`,
      children: renderContent({ label: `创新创业育人`, key: "3" }),
    },
    {
      key: 3,
      label: `实践育人`,
      children: renderContent({ label: `实践育人`, key: "4" }),
    },
    {
      key: 4,
      label: `其他课外育人`,
      children: renderContent({ label: `其他课外育人`, key: "5" }),
    },
  ];
  return (
    <div className={s.main}>
      <span className="g-tl">导师测评</span>
      <Form
        form={form}
        {...{
          labelCol: { span: 16 },
          wrapperCol: { span: 8 },
        }}
        labelAlign="left"
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={(key) => {
            setActiveKey(key);
          }}
        />
      </Form>
    </div>
  );
};

export default EvalMent;
