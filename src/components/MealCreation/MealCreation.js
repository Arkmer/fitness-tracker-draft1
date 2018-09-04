import React, { Component } from 'react';
import './MealCreation.css';

class MealCreation extends Component {

  componentDidMount(){
    console.log('MealCreation Loaded');
  }
  
  render() {
    return (
      <div>
        <h1>MealCreation</h1>
      </div>
    );
  }
}

export default MealCreation;