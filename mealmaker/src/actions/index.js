import fetch from 'cross-fetch'
import 'babel-polyfill'


export const chooseProduct = id => ({
  type:"CHOOSE_PRODUCT",
  id
})

export const removeProduct = id => ({
  type:"REMOVE_PRODUCT",
  id
})


export const requestProducts = () => {
  return {
    type: "REQUEST_PRODUCTS"
  }
}

export const receiveProducts = (json) => {
  console.log(json);
  return {
    type: "RECEIVE_PRODUCTS",
    availableProducts: json
  }
}

export const fetchProducts = () => {
  return dispatch => {
   dispatch(requestProducts())
   return fetch(`http://localhost:5000/api/products`)
     .then(response => response.json())
     .then(json => {dispatch(receiveProducts(json))})
 }
}
