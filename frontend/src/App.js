import React, { Component } from 'react';
import Agenda from "./Agenda.js";

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      friends:[
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Agenda MERN</h2>
        <Agenda friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
