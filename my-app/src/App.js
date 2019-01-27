import React, { Component } from 'react';
import Ninjas from './Ninjas.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas name="Ryu" age="25" belt="black" />
        <Ninjas name="Claudiu" age="27" belt="blue" />
      </div>
    );
  }
}

export default App;
