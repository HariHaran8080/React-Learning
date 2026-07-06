import React from 'react'
import PropTypes from 'prop-types'

const ProductDetails = ({deepname,deepPrice,deepDescription}) => {

    // console.log(props);
    
  return (
    <section>
        <h3>{deepname}</h3>
        <h3>{deepPrice}</h3>
        {/* <h3>{deepDescription}</h3> */}
    </section>
  )
}

export default ProductDetails

ProductDetails.defaultProps ={
    deepname:"SamSung",
    deepPrice:20000,
    deepDescription:"8GB RAM with 128GB "
}
ProductDetails.PropTypes ={
    deepname:PropTypes.string.isRequired,
    deepPrice:PropTypes.number.isRequired,
    deepDescription:PropTypes.string.isRequired 
}
