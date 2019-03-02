import React, { Component } from 'react';
import './App.css';
import Login from './login/login';
import './Login/style/bootstrap.min.css';
import './Login/style/style.css';

class App extends Component {
  render() {
    return (
      <div>
          <Login/>
      </div>
    )
  }
}

export default App;
