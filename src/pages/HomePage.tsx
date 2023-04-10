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
                      
                      <Link to={`/products/${item.id}`}>
                      <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />

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
        <img width={560} height={211} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VxfvWgRTZhHUGWOsv8gj5qn8y1edI5xQRBQMqvKnmfLok3ypZExxyv_qlunqhEn-N7A&usqp=CAU" alt="" />
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
            <Divider style={{fontSize:"40px"}}>Best Seller</Divider>
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

    <div className="site-layout-content" style={{margin:'100px 100px 100px 250px',}}>
    <Row>
      <Col span={12}>
          <Row>
          <Col span={17}>
            {/* <img width={89} height={89} src="" alt="" /> */}
          </Col>
          <Col span={17}>
            <h2 style={{fontSize:"16px"}}>Ms.Lucy Barton</h2>
            <p style={{fontSize:"16px"}}>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
      <Row>
          <Col span={17}>
            {/* <img width={89} height={89} src="" alt="" /> */}
          </Col>
          <Col span={17}>
            <h2 style={{fontSize:"16px"}}>Ms.Lucy Barton</h2>
            <p style={{fontSize:"16px"}}>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
          </Col>
        </Row>
      </Col>
    </Row>
    </div>
      <Divider style={{fontSize:"40px"}}>Our Blog</Divider>
      <Divider style={{fontSize:"18px",marginBottom:"60px"}}>But I must explain to you how all this mistaken idea</Divider>
    <div className="" style={{margin:'100px 100px 100px 200px',}}>
          <Row>
            <Col span={8}>
              <img style={{marginBottom:"20px"}} width={360} height={260} src="data:image/jpeg;base64,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" alt="" />
              <span style={{margin:"0px 0px 40px 0px"}}>March 22, 2016</span>
              <h2 style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit</h2>
              <p style={{fontSize:"17px"}}>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span style={{}}>Read More</span>
            </Col>
            <Col span={8}>
            <img style={{marginBottom:"20px"}} width={360} height={260} src="https://vcdn1-dulich.vnecdn.net/2021/07/16/8-1626444967.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GfgGn4dNuKZexy1BGkAUNA" alt="" />
              <span style={{margin:"0px 0px 40px 0px"}}>March 22, 2016</span>
              <h2 style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit</h2>
              <p style={{fontSize:"17px"}}>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span style={{}}>Read More</span>
            </Col>
            <Col span={8}>
            <img style={{marginBottom:"20px"}} width={360} height={260} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Sq_lezzvxY8P8vDJeOHJeUm4IIVvTUkVzfuxN_0CnMFQL_iPK8aVtT8zm82djWiA67w&usqp=CAU" alt="" />
              <span style={{margin:"0px 0px 40px 0px"}}>March 22, 2016</span>
              <h2 style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit</h2>
              <p style={{fontSize:"17px"}}>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span style={{}}>Read More</span>
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

export default HomePage;