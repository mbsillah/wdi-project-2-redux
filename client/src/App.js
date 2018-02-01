import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Player from './components/Player'
import NewPlayer from './components/NewPlayer'
import EditPlayer from './components/EditPlayer'
import Footer from './components/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/new" component={NewPlayer} />
              <Route exact path="/player/:playerId" component={Player} />
              <Route exact path="/player/:playerId/edit" component={EditPlayer} />
            </Switch>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
