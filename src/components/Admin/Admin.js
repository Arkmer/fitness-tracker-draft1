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