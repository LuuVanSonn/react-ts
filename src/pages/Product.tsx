import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  message,
  Table,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {

  
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
            label: "Home",
            key: "home",
          },
          {
            label: "Product",
            key: "product",
           
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
    </div>
  );
}

export default ProductPage;