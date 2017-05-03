import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { book: '' };
  }

  handleChange(event) {
    this.setState({ book: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchBooks(this.state.book);
    this.setState({ book: '' });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h4>Search for a book</h4>
        <input
          value={this.state.book}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Search</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {books: state.books.all}
}


export default connect(mapStateToProps, actions)(BookSearch);
