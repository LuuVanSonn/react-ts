import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Layout,Menu ,theme
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row,Space } from 'antd';
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
const HomePage = (props: Props) => {
  
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
              width={1400}
              height={710}
              src="https://spmph.edu.vn/Data-store/center_data/hinh_anh/image/BaiViet/thi%E1%BB%87p_qu%E1%BB%91c_t%E1%BA%BF_%C4%90i%E1%BB%81u_d%C6%B0%E1%BB%A1ng.png"
            />
    </div>

    {/* <div className="" style={{ margin: '60px 16px 60px' }}>
        <>
          <Divider>Text Lorem ipsum dolor sit amet</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          
        </>
    </div>  */}

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
                      <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />
                      <Link to={`/products/${item.id}`}>
                        <Button style={{marginTop:"10px",}}>Chi tiết</Button>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
    </div>

  
    <div className="site-layout-content" style={{margin:'100px 100px 100px 0px',textAlign:"center",}}>
    <Row>
      <Col span={12}>
        <h1 style={{fontSize:"29px",}}>Contrary to popular belief is simply rand.</h1>
        <h2 style={{fontSize:"18px",marginBottom:"70px"}}>Professor at Hamp deny dney College.</h2>
        <Space wrap>
        <Button style={{padding:"0 36px"}} type="primary" danger>Read More</Button>
        </Space>
      </Col>
      <Col span={12}>
        <img width={560} height={211} src="" alt="" />
      </Col>
    </Row>
    </div>

    {/* <div className="" style={{margin:'10px 0px',textAlign:"center",border:"2px"}}>
      <Divider style={{fontSize:"16px"}}>Những sản phẩm hàng đầu của cửa hàng</Divider>
    <>
      <Row>
        <Col span={8}>
        <Image
              width={380}
              height={200}
              src="https://www.daviddomoney.com/wp-content/uploads/2017/01/Snowdrop-e1484895897657.jpg.webp"
            />
        </Col>
        <Col span={8}>
        <Image
              width={380}
              height={200}
              src="https://img.freepik.com/premium-photo/white-snowdrops-lie-cover-old-book-rustic-wooden-table-top-view-first-spring-flowers_319154-289.jpg?w=1060"
            />
        </Col>
        <Col span={8}>
        <Image
              width={380}
              height={200}
              src="https://img.freepik.com/premium-photo/white-snowdrops-lie-cover-old-book-rustic-wooden-table-top-view-first-spring-flowers_319154-289.jpg?w=1060"
            />
        </Col>
        
      </Row>
    </>
    </div> */}

    {/* <div className="" style={{ margin: '24px 16px 0' }}>
            <>
          <Steps current={1} labelPlacement="vertical" items={items} />
          <br />
          <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
          <br />
          <Steps current={1} size="small" labelPlacement="vertical" items={items} />
        </>
      </div> */}

    <div className="site-layout-content">
            <div style={{ padding: "20px", margin: "100px",textAlign:"center" }}>
            <Divider style={{fontSize:"25px"}}>Sản Phẩm Hàng Đầu</Divider>
            <Divider style={{fontSize:"16px"}}>Những sản phẩm hàng đầu của cửa hàng</Divider>
              <Row gutter={[16, 16]}>
                {data.map((item) => (
                  <Col key={item.id} span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<Image src={item.image} width={240} height={200} />}
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

export default HomePage;