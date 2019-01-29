import React from 'react'

const AvailableProduct = ({id,name,description,onClick}) => (
  <li onClick={onClick}>
    <h3>{name}</h3>
    <h4>{description}</h4>
  </li>
)

export default AvailableProduct
