import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';
import { Grid, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BookList />
      </div>
    );
  }
}

export default App;
