import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id === Number(id))
        setProduct(currentProduct)
        
    })
    return (
        <div>
            <h2>{product?.name}</h2>
            <p>{product?.price}</p>
            <img src={product?.image} alt={product?.name} />
            <p>{product?.description}</p>
        </div>
    )
}

export default ProductDetailPage