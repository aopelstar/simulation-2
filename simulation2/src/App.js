import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Home from './components/Home';
import route from './route';




class App extends Component {
  render() {
    return (
      <div className="main-page">
{/* 42h */}
        {route}

      </div>
    );
  }
}

export default App;
