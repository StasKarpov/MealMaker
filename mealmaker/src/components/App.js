import React, { Component } from 'react';
import AvailableProducts from '../containers/AvailableProducts'
import ChoosenProducts from '../containers/ChoosenProducts'

class App extends Component {
  render() {
    return (
      <div style={{width:'500px',overflow:'hidden'}}>
        <h3>This is a MealMaker app</h3>
        <div style={{width:'250px',float:'left'}}>
          <h4>Available Products:</h4>
          <AvailableProducts />
        </div>
        <div style={{width:'250px',float:'left'}}>
          <h4>Choosen Products:</h4>
          <ChoosenProducts />
        </div>
      </div>
    );
  }
}

export default App;
