import React, { Component } from 'react';
import logo from './logo.svg';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BookSearch />
        <BookList />
      </div>
    );
  }
}

export default App;
