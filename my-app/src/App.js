import React, { Component } from 'react';
import Ninjas from './Ninjas.js';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: '30', belt: 'black', id: 1},
      { name: 'Claudiu', age: '27', belt: 'blue', id: 2},
      { name: 'Ciprian', age: '25', belt: 'white', id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
