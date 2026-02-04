import axios from "axios";


export const getAllProductData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        return(res.data);
}
export const getSelectedProductData = async (id) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return(res.data);
}