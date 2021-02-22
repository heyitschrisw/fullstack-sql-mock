import React from 'react';

// Image / Title / Current Bid / Bid Ends In # Days
const Products = (props) => {
   return(
    <div
      className='product-list-entry'
      onClick={() => {props.handleProductListClick(props.index)}} >
      <img src={props.product.image} width="200" height="200"/>
      {props.product.item} <br></br>
      Current Bid: ${props.product.curr_bid} <br></br>
      Bid Ends In: {props.product.ends_in} {`day(s)`}
    </div>
  )
}

export default Products