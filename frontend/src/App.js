import React, { Component } from 'react';
import Agenda from "./Agenda.js";

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      friends:[
        { "name" : "Esteban Dalel", "website" : "estebandalelr.co" }
      ],
    };
  }
  componentDidMount(){
    fetch('/agenda',{method:'GET',
    headers:{accept:'application/json'}})
    .then((res)=>{
      if(res.ok)
      return res.json();
    })
    .then((friends) =>{
      this.setState({
        friends:friends
      });
    })
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
