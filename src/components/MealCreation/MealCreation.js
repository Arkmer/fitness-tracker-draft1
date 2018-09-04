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

// Many inputs...
// Input for calories, macros, and quantity.
// Search for foods?
// Ability to combine foods into meals.
// Ability to combine meals into days.

// Days into weeks? Weeks into months?