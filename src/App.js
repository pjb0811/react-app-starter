import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { Home, About, Counter } from './components/pages';
import TopMenu from './components/menus/TopMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>React App Starter</title>
        </Helmet>
        <TopMenu/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/counter" component={Counter}/>
      </div>
    );
  }
}

export default App;
