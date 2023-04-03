import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';

const AddProductPage = (props) => {
    const onFinish = (values: any) => {
        props.onAdd(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // const { register, handleSubmit } = useForm()
    // const onHandleSubmit = data => {
    //     props.onAdd(data);
    // }
    return (
        <div>
            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" name="name" {...register("name")} />
                <input type="number" name="price"  {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
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
                    name="Image"
                    rules={[{ required: true, message: 'Bạn chưa nhập Image sản phẩm!!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Bạn chưa nhập Description sản phẩm!!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage