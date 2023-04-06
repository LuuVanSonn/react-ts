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

    <div className="" style={{ margin: '60px 16px 60px' }}>
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
    </div> 

    <div className="site-layout-content">
            <div style={{ padding: "20px", margin: "100px",textAlign:"center" }}>
            <Divider style={{fontSize:"25px"}}>Sản Phẩm Mới</Divider>
            <Divider style={{fontSize:"16px"}}>Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới</Divider>
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

    <div className="" style={{margin:'10px 0px',textAlign:"center",border:"2px"}}>
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
    </div>

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

    </div>
  );
}

export default HomePage;