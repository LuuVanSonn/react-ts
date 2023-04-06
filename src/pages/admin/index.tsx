import React from 'react';
import { Space, Table, Tag, Button } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input } from 'antd';
import { Upload } from 'antd';
import type { UploadProps } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

const AddProductPage = (props:any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = (values: any) => {
    props.onAdd({
        name: values.name,
        price: values.price,
        image: values.image, // chú ý đưa giá trị trường tải ảnh vào đối tượng data
        description: values.description,
      });

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const propsr: UploadProps = {
    action: 'http://localhost:3000/products',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  
  };
  return (
    <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo">
              <img src="" alt="" />
              </div>
            <Menu
              theme="dark"mode="inline"
              defaultSelectedKeys={['4']}
              
              >
              <Menu.Item>
              <Link to ={'/admin'}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ={'/admin/products'}>Products</Link>
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Bạn chưa nhập name sản phẩm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Bạn chưa nhập Price sản phẩm!!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Bạn chưa thêm ảnh sản phẩm!!' }]}
                >
                    <Upload {...propsr}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Bạn chưa nhập Description sản phẩm!!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" ghost style={{margin:'20px'}}>
                        <Link to ={'/admin/products'}>Add New Product</Link>
                    </Button>
                </Form.Item>
            </Form>
                
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      );
};


export default AddProductPage