import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,Form,Input,
  Layout,Menu ,theme,message
} from "antd";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import axios from 'axios';
import { signin } from "../../api/users";



interface ILogin {
  email: string;
  password: string;
}

const description = 'This is a description.';

const Login = () => {
  
  const navigate = useNavigate();
  const onSubmit = async (input: any) => {
    try {
      const { data } = await signin(input);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('users', JSON.stringify(data.accessToken));
      navigate('/admin/products');
    } catch (error) {
     if(error = 400){
      alert("Vui lòng kiểm tra lại tài khoản");
     }
    }
  }
  return (
    <div className="appHeader">
      <Menu
        className="appMenu"

        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: <Link to="/">Home</Link>,
            key: "home",
          },
          {
            label: <Link to="/">About</Link>,
            key: "about",
          },
          {
            label: <Link to="/products">Product</Link>,
            key: "produtc",
          },
          {
            label: <Link to="/">Contact</Link>,
            key: "contact",
          },
          {
            label: <Link to="/admin">Sign</Link>,
            key: "sign",
          }
        ]}
      />


<div style={{ margin: 'auto', maxWidth: '400px',marginTop:"50px" }}>
      <h1 style={{textAlign:"center",}}>Login</h1>
      <Form name="normal_login" className="login-form" onFinish={onSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/admin/register">register now!</a>
        </Form.Item>
      </Form>
    </div>


    
    
    <div className="footer" style={{margin:"0px 0px 50px 0px", backgroundColor:"#111111",color:"#ffffff",height:"500px" }}>
    <Row>
      <Col span={6}>
        <h2 style={{marginTop:"50px",marginLeft:"100px"}}>ABOUT US</h2>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
      </Col>
      <Col span={6}>
        <h2 style={{marginTop:"50px",marginLeft:"100px"}}>INFORMATION</h2>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>About us</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Delivery Information</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Terms & Condition</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Privacy & Policy</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Manufactures</p>
      </Col>
      <Col span={6}>
        <h2 style={{marginTop:"50px",marginLeft:"100px"}}>MY ACCOUNT</h2>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>My Cart</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Login</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Wishlist</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Checkout</p>
      </Col>
      <Col span={6}>
        <h2 style={{marginTop:"50px",marginLeft:"100px"}}>OUR SERVICE</h2>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>My Account</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>My Cart</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Login</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Wishlist</p>
        <p style={{marginTop:"20px",marginLeft:"100px"}}>Checkout</p>

      </Col>
    </Row>
    </div>
    </div>
  );
}

export default Login;