import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Layout,Menu ,theme
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { List } from 'antd';
import { Divider } from 'antd';
import { Steps } from 'antd';
import { Image } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from "react-router-dom";
import { IProduct } from "../types/product";
const { Item } = Menu;
type Props = {};



const description = 'This is a description.';
const items = [
  {
    title: 'Finished',
    description,
  },
  {
    title: 'In Progress',
    description,
  },
  {
    title: 'Waiting',
    description,
  },
];
const { Meta } = Card;
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
const ProductPage = (props: Props) => {
  
  const [data, setData] = useState<IProduct[]>([])

  useEffect(() => {
    setData(props.products)
  }, [props])
  function handleClick(e) {
    console.log('click', e);
  }
  return (
    <div className="appHeader">
      <Menu
        className="appMenu"
        onClick={handleClick}
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

    <div className="" style={{margin:'10px 0px 100px',textAlign:"center"}}>
              <Image
              width={1220}
              height={270}
              src="https://spmph.edu.vn/Data-store/center_data/hinh_anh/image/BaiViet/thi%E1%BB%87p_qu%E1%BB%91c_t%E1%BA%BF_%C4%90i%E1%BB%81u_d%C6%B0%E1%BB%A1ng.png"
            />
    </div>

   <div className="" style={{margin:'10px 0px 100px',textAlign:"center"}}>
   <Row>
    <Col span={18} push={6}>
    <div style={{ padding: "5px",textAlign:"center" }}>
            <Divider style={{fontSize:"25px"}}>Sản Phẩm Mới</Divider>
            <Row gutter={[16, 16]}>
                {data.map((item) => (
                  <Col key={item.id} span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<Image src={item.image} width={240} height={200} />}
                    >
                      
                      <Link to={`/products/${item.id}`}>
                      <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />

                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
    </Col>
    <Col span={6} pull={18}>
          <h2>CATEGORIES</h2>
          <p>Clothing</p>
          <p>Bags</p>
          <p>Shoes</p>
          <p>Jewelry</p>
          <p>Accessories</p>
          <p>Food / Drink Store</p>
          <p>Gift Store</p>
          <p>Accessories</p>
          <p>Watch</p>
          <p>Other</p>

    </Col>
  </Row>
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

export default ProductPage;