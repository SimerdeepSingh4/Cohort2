import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData, getSelectedProductData} from '../api/productApi'

export const ProductDataContext = createContext()
const ProductContext = (props) => {
    const [productData, setProductData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const setData = async() =>{
        setProductData(await getAllProductData())
    }
    const setSelectedData = async(id)=>{
        setSelectedProduct(await getSelectedProductData(id))
    }
    useEffect(() => {
        setData(),
        setSelectedData()
    }, [])
    return (
        <div>
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext