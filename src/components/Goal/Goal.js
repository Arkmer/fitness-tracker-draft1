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

// Lots of logic here?
// Spend some figuring out specifically what you want done.