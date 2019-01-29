import React from 'react'

const ChoosenProduct = ({id,name,description,removeProduct}) => (
  <li>
    <h3>{name}</h3>
    <h4>{description}</h4>
    <h6
      style={{color:'#F00'}}
      onClick={removeProduct}>X</h6>
  </li>
)

export default ChoosenProduct
