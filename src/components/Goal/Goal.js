import React, { Component } from 'react';
import './Goal.css';

class Goal extends Component {

  componentDidMount(){
    console.log('Goal Loaded');
  }
  
  render() {
    return (
      <div>
        <h1>Goal</h1>
      </div>
    );
  }
}

export default Goal;