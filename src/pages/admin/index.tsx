

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Card, Col, Image, Layout, Menu, Row, theme } from "antd";
import "./homepage.css"
import { Outlet } from "react-router-dom";
import baner from "../assets/baner.jpeg";
import ad from "../assets/ad.jpeg";
import { IProduct } from "../types/product";
const { Header, Content, Footer } = Layout;
const { Item } = Menu;
type Props = {};

const HomePage = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [data, setData] = useState<IProduct[]>([])

  useEffect(() => {
    setData(props.products)
  }, [props])
  return (
    <div className="layoutClient__container">
      <Layout className="layout">
        <Header>
        <Menu
        className="appMenu"
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: "Home",
            key: "home",
          },
          {
            label: "Product",
            key: "product",
            children: [
              {
                label: "Women's Dresses",
                key: "womens-dresses",
              },
              {
                label: "Women's Shoes",
                key: "womens-shoes",
              },
              {
                label: "Women's Watches",
                key: "womens-watches",
              },
              {
                label: "Women's Bags",
                key: "womens-bags",
              },
              {
                label: "Women's Jewellery",
                key: "womens-jewellery",
              },
            ],
          },
          {
            label: "About",
            key: "about",
          },
          {
            label: "Contact",
            key: "contact",
          }
        ]}
      />

       <div className="" style={{margin:'10px 0px 100px'}}>
              <Image
              width={1600}
              height={700}
              src="https://bizflyportal.mediacdn.vn/bizflyportal/473/347/2020/06/04/00/20/5e015911832591446.jpg"
            />
      </div>    
        </Header>
        <Content style={{ padding: "0 50px" }}>
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

            <div
              className="site-layout-content"
              style={{ background: colorBgContainer }}
            >
              <div className="banner__container">
                <img src={ad} alt="" />
              </div>
              <div style={{ padding: "20px", margin: "100px" }}>
                <Row gutter={[16, 16]}>
                  {data.map((item) => (
                    <Col key={item.id} span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image src={item.image} width={240} height={300} />}
                      >
                        <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", margin: "0px" }}>{item.price} ₫</span>} />
                        <Link to={`/products/${item.id}`}>
                          <Button>View Details</Button>
                        </Link>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            <div className="" style={{ margin: '24px 16px 0' }}>
                  <>
                <Steps current={1} labelPlacement="vertical" items={items} />
                <br />
                <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
                <br />
                <Steps current={1} size="small" labelPlacement="vertical" items={items} />
              </>
            </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <div className="footer-layout">Designed and made with by Văn Minh © 2023</div>
        </Footer>
      </Layout>
    </div>
  );
};

export default HomePage;
