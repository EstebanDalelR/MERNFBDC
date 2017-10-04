import React, { Component } from 'react';
import Friend from "./Friend.js"

class Agenda extends Component {
  constructor(props) {
    super (props);
  }

  renderFriends(){
    return this.props.friends.map(
      (t,i)=>{
        return <Friend friend={t} key={i}/>;
      }
    );
  }

  render() {
    return (
      <table className='table-hover thead-default table-responsive'>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Website</th>
          </tr>
          {this.renderFriends()}
        </tbody>
      </table>
    );
  }
}

export default Agenda;
