
export default function products(state = [],action){
  console.log("state is");
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case "CHOOSE_PRODUCT":{
      let new_state  = {
        availableProducts: state.availableProducts.map(p => {return{...p}}),
        choosenProducts: state.choosenProducts.map(p => {return{...p}}).concat(
           {...state.availableProducts.find(p => p.id === action.id)}
        )
      }
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
