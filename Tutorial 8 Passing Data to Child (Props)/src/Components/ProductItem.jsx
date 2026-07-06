import React from 'react'
import ProductDetails from './ProductDetails';

const ProductItem = ({product}) => {

    // console.log(props);

    // console.log();
    
    
  return (
    <div>
        <h1>Displaying product Items</h1>
        <ProductDetails 
        deepname={product.name}
        deepPrice={product.price}
        deepDescription={product.description}/>
    </div>
  )
}

export default ProductItem
