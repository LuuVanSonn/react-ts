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

   <div className="">
   <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>
   </div>
    

    </div>
  );
}

export default ProductPage;