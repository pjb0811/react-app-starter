import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    };
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={'assets/logo.svg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.test}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;