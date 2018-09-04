import React, { Component } from 'react';
import './Graph.css';

class Graph extends Component {

  componentDidMount(){
    console.log('Graph Loaded');
  }
  
  render() {
    return (
      <div>
        <h1>Graph</h1>
      </div>
    );
  }
}

export default Graph;

// Graphs API that I can switch between the same graphs as in my excel sheet.
// Weight & 7 day average weight
// Calories
// Macros
// Measurements

// Some issues may include:
// Being able to choose what you graph
// Combining graphs?
// Fit to screen?