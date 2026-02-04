import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)
    const {id} = useParams()

    let selectedProduct = 'Loading...'
    if(productData.length > 0){
        selectedProduct = productData.find((elem)=> elem.id == id)
    }
    console.log(selectedProduct);

    

    return (
        <div>
            <img src={selectedProduct.image} alt="" />
            <h2>{selectedProduct.title}</h2>
            <h2>{selectedProduct.category}</h2>
            <h2>{selectedProduct.description}</h2>
            <h2>{selectedProduct.price}</h2>
        </div>
    )
}

export default ProductDetails