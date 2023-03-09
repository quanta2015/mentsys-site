import React from "react";
import s from "./index.module.less";
import "./index.less";
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
} from "antd";
const Test = () => {
  const [form] = Form.useForm();
  console.log("useParams", useParams());
  const { name, id, uid } = useParams();
  // 思想育人 科研育人 创新创业育人 实践育人 其他课外育人
  const renderContent = (item) => {
    return (
      <div className="m-form">
        <div className="tit">{`信息科学与技术学院${item.label}考核表`}</div>
        <div>
          <Form
            form={form}
            initialValues={{
              name: name,
            }}
            labelAlign="left"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Form.Item
                label="姓名"
                name="name"
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <Input disabled={true} />
              </Form.Item>
              <Form.Item
                label="性别"
                name="sex"
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <Checkbox.Group>
                  <Checkbox value="男">男</Checkbox>
                  <Checkbox value="女">女</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item
                label="出生日期"
                name="birthday"
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <DatePicker />
              </Form.Item>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Form.Item
                label="岗位类别"
                name="jobType"
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <Select placeholder="请选择岗位类别">
                  <Select.Option value="1">教师</Select.Option>
                  <Select.Option value="2">教师</Select.Option>
                  <Select.Option value="3">教师</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="职称/职务"
                name="jobTitle"
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <Select placeholder="请选择职称/职务">
                  <Select.Option value="1">教师</Select.Option>
                  <Select.Option value="2">教师</Select.Option>
                  <Select.Option value="3">教师</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="育人工作总量"
                name={`workTotal${item.key}`}
                style={{
                  display: "inline-block",
                  width: "32%",
                }}
                labelCol={{ span: 7 }}
              >
                <InputNumber min={0} />
              </Form.Item>
            </div>
            <Form.Item name={`complete${item.key}`} labelCol={{ span: 3 }}>
              <Input.TextArea
                placeholder="课外育人工作量完成情况"
                style={{
                  height: 120,
                }}
              />
            </Form.Item>
            <Form.Item
              label="系部意见"
              name={`departmentOpinion${item.key}`}
              labelCol={{ span: 8 }}
            >
              <Select placeholder="请选择系部意见">
                <Select.Option value="1">优秀</Select.Option>
                <Select.Option value="2">合格</Select.Option>
                <Select.Option value="3">不合格</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="学院教师课外育人工作考核小组意见"
              name={`groupOpinion${item.key}`}
              labelCol={{ span: 8 }}
            >
              <Select placeholder="请选择学院教师课外育人工作考核小组意见">
                <Select.Option value="1">优秀</Select.Option>
                <Select.Option value="2">合格</Select.Option>
                <Select.Option value="3">不合格</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <Button
          type="primary"
          onClick={() => {
            console.log(form.getFieldsValue());
          }}
        >
          保存
        </Button>
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: `思想育人`,
      children: renderContent({ label: `思想育人`, key: "1" }),
    },
    {
      key: "2",
      label: `科研育人`,
      children: renderContent({ label: `科研育人`, key: "2" }),
    },
    {
      key: "3",
      label: `创新创业育人`,
      children: renderContent({ label: `创新创业育人`, key: "3" }),
    },
    {
      key: "4",
      label: `实践育人`,
      children: renderContent({ label: `实践育人`, key: "4" }),
    },
    {
      key: "5",
      label: `其他课外育人`,
      children: renderContent({ label: `其他课外育人`, key: "5" }),
    },
  ];
  return (
    <div className={s.main}>
      <span className="g-tl">导师测评</span>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Test;
