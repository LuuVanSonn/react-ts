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
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
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
const ProductDetailPage = (props) => {
  
  const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id === Number(id))
        setProduct(currentProduct)
        
    })
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
          <Col span={12}>
            <img width={510} height={677} src={product?.image} alt={product?.name} />
          </Col>
          <Col span={12}>
            <h2>{product?.name}</h2>
            <p>Model: MNG001</p>
            <p>{product?.price}</p>
            <p>{product?.description}</p>
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

export default ProductDetailPage;