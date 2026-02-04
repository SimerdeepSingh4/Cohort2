import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This is Home Page</h1>
        <button onClick={()=>{
            navigate('/products')
        }}>Explore All Products</button>
    </div>
  )
}

export default Home