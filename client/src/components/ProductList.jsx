import React from 'react';
import Products from './Products';

// Render each product from product props

const ProductList = (props) => {
   return(
    <div className='product-list'>
      <b>Current Products:</b>
      {props.products.map((product, index) => {
        return <Products
                  key={index}
                  product={product}
                  index={index}
                  handleProductListClick={props.handleProductListClick} />
      })}
    </div>
  )
}

export default ProductList