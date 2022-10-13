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
        label="Tên đăng nhập"
        name="username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className="login-field" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password className="login-field" />
      </Form.Item>
      <Link to="/login/forgot-password" className="forgot-password">
        Quên mật khẩu?
      </Link>

      <Button htmlType="submit" className="normal-button">
        Đăng nhập
      </Button>
    </Form>
  );
};

export default Login;
