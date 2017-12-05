import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Player from './components/Player'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/player/:playerId" component={Player} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
