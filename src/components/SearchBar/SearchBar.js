import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions';
import { Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { book: '' };
  }

  handleChange(event) {
    this.setState({ book: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: this.state.book } })
    .then(response => {
      this.props.fetchBooksSuccess(response);
    })
    .catch(err => {
      this.props.fetchBooksError(err);
    })
    this.setState({ book: '' });
  }

  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.books.totalItems ? `${this.props.books.totalItems} Results`: 'No Results' }</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <FormControl value={this.state.book} onChange={this.handleChange.bind(this)} placeholder="Search" />
                <Button bsStyle='primary' type="submit">Submit</Button>
              </FormGroup>
            </Form>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all
  }
}


export default connect(mapStateToProps, actions)(SearchBar);
