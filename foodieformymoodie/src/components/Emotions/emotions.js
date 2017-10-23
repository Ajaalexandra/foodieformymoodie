import React, { Component } from 'react';

import './emotions.css'


class Emotions extends Component {
  constructor() {
    super();
  }





render(){
  return(
    <div>
    <button class="btn btn-info" onClick={(e) => {this.props.handleClick()}}>{
      this.props.title
    } </button>
    </div>
  )
}
}

export default Emotions;
