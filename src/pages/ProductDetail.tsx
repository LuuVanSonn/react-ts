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
const ProductDetailPage = (props:Props) => {
  
  const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id === Number(id))
        setProduct(currentProduct)
        
    })
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
              src="data:image/jpeg;base64,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"
            />
    </div>

    <div className="" style={{marginLeft:"140px", }}>
        <Row>
          <Col span={10}>
            <img width={400} height={300} src={product?.image} alt={product?.name} />
          </Col>
          <Col span={12}>
            <h2>{product?.name}</h2>
            <p>Model: MNG001</p>
            <p>{product?.price}</p>
            <p style={{width:"460px",color:"#666666"}}>{product?.description}</p>
          </Col>
        </Row>
    </div>
    {/* <hr /> */}

    <div className="" style={{marginLeft:"140px",marginTop:"200px"}}>
        <h4 style={{fontSize:"24px"}}>Description</h4>
        <p style={{color:"#666666"}} >{product?.description}</p>
    </div>
    <div className="site-layout-content">
            <div style={{ padding: "15px", margin: "100px",textAlign:"center",marginTop:"30px" }}>
            <Divider style={{fontSize:"40px"}}>New Arrivals</Divider>
            <Divider style={{fontSize:"18px",marginBottom:"60px"}}>But I must explain to you how all this mistaken idea</Divider>
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

export default ProductDetailPage;