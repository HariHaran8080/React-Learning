import React, { useState } from 'react'
import ProductItem from './ProductItem'

const Shop = () => {
    let [product,setproduct]=useState({name:"Iphone8",price:10000,description:"16GB with 126Rom"})
  return (
    <div>
        <h1>Welcome to my Shop</h1>
        <ProductItem product ={product}/>
    </div>
  )
}

export default Shop