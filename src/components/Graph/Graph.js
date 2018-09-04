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