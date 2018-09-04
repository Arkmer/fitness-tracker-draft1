import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component {

  componentDidMount(){
    console.log('Admin Loaded');
  }
  
  render() {
    return (
      <div>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default Admin;

// Typical admin page.
// Name, age, gender, days you want to measure, color scheme(?)