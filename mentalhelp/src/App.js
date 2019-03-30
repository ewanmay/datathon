import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getRequest(address) {
    axios.get(address).then(res => console.log(res))
  }
  
  render() {
    this.getRequest('http://0.0.0.0:5000/');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
