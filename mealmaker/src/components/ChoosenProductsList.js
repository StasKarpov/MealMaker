import React from 'react'
import ChoosenProduct from './ChoosenProduct'

const ChoosenProductsList = ({products, removeProduct}) => (
  <ul>
    {products.map(product =>
      <ChoosenProduct
        key={product.id}
        {...product}
        removeProduct={()=>removeProduct(product.id)}
      />
    )}
   </ul>
)

export default ChoosenProductsList
