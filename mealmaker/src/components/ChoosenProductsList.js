import React from 'react'
import Product from './Product'

const ChoosenProductsList = ({products}) => (
  <ul>
    {products.map(product =>
      <Product
        key={product.id}
        {...product}
      />
    )}
   </ul>
)

export default ChoosenProductsList
