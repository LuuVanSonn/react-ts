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
              <Row gutter={[14, 14]}>
                {data.map((item) => (
                  <Col key={item.id} span={6}>
                    <Card
                      hoverable
                      style={{ width: 190 }}
                      cover={<Image src={item.image} width={140} height={100} />}
                    >
                      <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />
                      <Link to={`/products/${item.id}`}>
                        <Button style={{marginTop:"10px",}}>Chi tiết</Button>
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
    
    <div className="footer" style={{ marginLeft:"100px" }}>
      <Row>
        <Col span={6}>
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        </Col>
        <Col span={6}>
          <h2>INFORMATION</h2>
          <p>About us</p>
          <p>Delivery Information</p>
          <p>Terms & Condition</p>
          <p>Privacy & Policy</p>
          <p>Manufactures</p>
        </Col>
        <Col span={6}>
          <h2>MY ACCOUNT</h2>
          <p>My Cart</p>
          <p>Login</p>
          <p>Wishlist</p>
          <p>Checkout</p>
        </Col>
        <Col span={6}>
          <h2>OUR SERVICE</h2>
          <p>My Account</p>
          <p>My Cart</p>
          <p>Login</p>
          <p>Wishlist</p>
          <p>Checkout</p>

        </Col>
      </Row>
      </div>
    </div>
  );
}

export default ProductPage;