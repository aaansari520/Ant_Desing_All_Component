import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const { TextArea } = Input;

const AppContact = () => {
  return (
    <div className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h3>Get In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            dignissimos.
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          style={{ width: "30%", margin: "auto" }}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your fullname!" }]}
          >
            <Input
              prefix={<i className="fa fa-user" aria-hidden="true"></i>}
              placeholder="Full Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<i className="fa fa-envelope" aria-hidden="true"></i>}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              type="number"
              prefix={<i className="fa fa-phone" aria-hidden="true"></i>}
              placeholder="Phone"
            />
          </Form.Item>
          <Form.Item name="message">
            <TextArea
              prefix={<i className="far fa-comment-alt"></i>}
              placeholder="message"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>I agree with the term's & Conditions</Checkbox>
            </Form.Item>

            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                margin: "auto",
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Submit
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AppContact;
