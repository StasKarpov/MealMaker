
export default function products(state = [],action){
  console.log('state');
  console.log(state);
  switch (action.type) {

    case "CHOOSE_PRODUCT":{
      let new_state = {
        availableProducts: state.availableProducts.map(p => {return{...p}}),
        choosenProducts: state.choosenProducts.find(p => p.id === action.id) ?
                          //if product is already in the list that ++ it quantity
                         state.choosenProducts.map(p => {
                           if(p.id === action.id){
                             let new_p = {...p}
                             new_p.quantity++
                             return new_p
                           }
                           else return{...p}
                         }) : //else append new product
                        state.choosenProducts.map(p => {return{...p}}).concat(
                           {quantity:1, ...state.availableProducts.find(p => p.id === action.id)}
                        )
      }
      console.log("new state");
      console.log(new_state);
      return new_state
    }
    case "REMOVE_PRODUCT":
      return {
        availableProducts: state.availableProducts.map(p => {return {...p}}),
        choosenProducts: state.choosenProducts.filter(p => {
          return(p.id !== action.id)
        }).map(p => {return{...p}})
      }
    default:
      return state
  }
}
