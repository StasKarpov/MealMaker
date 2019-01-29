import React from 'react'
import AvailableProduct from './AvailableProduct'

const AvailableProductsList = ({products,chooseProduct}) => (
  <ul>
    {products.map(product =>
      <AvailableProduct
        key={product.id}
        {...product}
        onClick={() => chooseProduct(product.id)}
      />
    )}
   </ul>
)

export default AvailableProductsList
