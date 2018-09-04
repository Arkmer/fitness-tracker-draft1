import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Admin from '../Admin/Admin';
import Input from '../Input/Input';
import Goal from '../Goal/Goal';
import Graph from '../Graph/Graph';
import MealCreation from '../MealCreation/MealCreation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log('App Loaded');
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/admin" component={Admin} />
          <Route path="/input" component={Input} />
          <Route path="/goal" component={Goal} />
          <Route path="/graph" component={Graph} />
          <Route path="/mealcreation" component={MealCreation} />
        </div>
      </Router>
    );
  }
}

export default App;