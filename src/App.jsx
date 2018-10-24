import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/CustomNavBar';
import Agents from './components/Agents/Agents';
import Jobs from './components/Jobs/Jobs'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div></div>
          <Route exact path="/" component={Home} />
          <Route path="/agents" component={Agents} />
          <Route path="/jobs" component={Jobs} />
        </div>
      </Router>
    );
  }
}

export default App;
