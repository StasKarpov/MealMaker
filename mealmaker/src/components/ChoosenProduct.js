import React from 'react'

const ChoosenProduct = ({id,name,description,quantity,removeProduct}) => (
  <li>
    <h3>{name} {quantity>1 ? ' x'+quantity : ''}</h3>
    <h4>{description}</h4>
    <h6
      style={{color:'#F00'}}
      onClick={removeProduct}>X</h6>
  </li>
)

export default ChoosenProduct
