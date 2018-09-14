import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import More from './pages/More.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/more' component={More}/>
        </div>
      </Router>
    );
  }
}

export default App;
