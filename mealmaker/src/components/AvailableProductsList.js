import React from 'react'
import AvailableProduct from './AvailableProduct'

const AvailableProductsList = ({products,chooseProduct}) => (
  <ul>
    {products.map(product =>
      <AvailableProduct
        key={product._id}
        {...product}
        onClick={() => chooseProduct(product._id)}
      />
    )}
   </ul>
)

export default AvailableProductsList
