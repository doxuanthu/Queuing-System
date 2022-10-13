import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmitAccount = () => {};
  return (
    <Form
      className="login-form"
      name="loginByAccount"
      layout="vertical"
      onFinish={onSubmitAccount}
      requiredMark={false}
    >
      <Form.Item
        label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className="login-field" />
      </Form.Item>

      <Button htmlType="submit" className="normal-button">
        Tiếp tục
      </Button>
    </Form>
  );
};

export default Login;
