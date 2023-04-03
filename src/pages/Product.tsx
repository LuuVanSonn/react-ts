import React, { useState, useEffect } from 'react'
import { IProduct } from '../types/product'

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
        window.location.reload()
    }

    return (
        <div>
            <h1>ProductPage</h1>
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.description}</h3>
                            <button onClick={() => removeProduct(item.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage