import React from 'react'
import ChoosenProduct from './ChoosenProduct'

const ChoosenProductsList = ({products, removeProduct}) => (
  <ul>
    {products.map(product =>
      <ChoosenProduct
        key={product._id}
        {...product}
        removeProduct={()=>removeProduct(product._id)}
      />
    )}
   </ul>
)

export default ChoosenProductsList
