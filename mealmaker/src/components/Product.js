import React from 'react'

const Product = ({id,name,description}) => (
  <li>
    <h3>{name}</h3>
    <h4>{description}</h4>
  </li>
)

export default Product
