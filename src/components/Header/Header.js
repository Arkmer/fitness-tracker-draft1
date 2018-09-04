import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  componentDidMount(){
    console.log('Header Loaded');
  }

  render() {
    return (
      <div>
        <h1>Fitness Tracker</h1>
        <Link to="/admin">Admin</Link>&nbsp; &nbsp;
        <Link to="/input">Input</Link>&nbsp; &nbsp;
        <Link to="/goal">Goal</Link>&nbsp; &nbsp;
        <Link to="/graph">Graph</Link>&nbsp; &nbsp;
        <Link to="/mealcreation">Meal Creation</Link>
      </div>
    );
  }
}

export default Header;

// Bar across the top with the site title clearly displayed above and the links lined up below.
// Mousing over the links will highlight them in a rectangle flush with the bottom of the header bar.