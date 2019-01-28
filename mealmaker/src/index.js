import React from 'react';
import { render } from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import products from './reducers'

const initial_state = {
  availableProducts:[
    {
      id:1,
      name:'bread',
      description:'white bread'
    },{
      id:2,
      name:'sugar',
      description:'sugar is tasty but unhealthy'
    },{
      id:3,
      name:'butter',
      description:'you can eat it with bread'
    }
  ],
  choosenProducts:[{
      id:2,
      name:'sugar',
      description:'sugar is tasty but unhealthy'
    }
  ]
}

const store = createStore(products,initial_state)

console.log(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
