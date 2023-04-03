import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';

const UpdateProductPage = (props) => {
   const {id} = useParams()
   const { register, handleSubmit, reset } = useForm();
   useEffect(() => {
    const currentProduct = props.products.find((product) => product.id === Number(id))
    reset(currentProduct)
   },[props])

   const onHandleSubmit = data => {
    props.onUpdate(data)
   }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">UpdateProduct</button>
            </form>
        </div>
    )
}

export default UpdateProductPage