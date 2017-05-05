import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import { Navbar, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { book: '', maxResults: 5 };
  }

  handleChange(event) {
    this.setState({ book: event.target.value })
  }

  handleDisplayQuantityChange(event) {
    this.setState({ maxResults: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchBooks(this.state.book, this.state.maxResults);
  }

  render(){
    const books = this.props.books;
    const displayQuantityOptions = _.range(5, 40, 5).map(quantity => (<option key={quantity} value={quantity}>{quantity}</option>))

    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{books.totalItems ? `${books.totalItems} Results`: 'No Results' }</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
              <FormControl value={this.state.book} onChange={this.handleChange.bind(this)} placeholder="Search" />
                {!!books.totalItems && !!this.state.book &&
                  <FormControl componentClass="select" value={this.state.maxResults} onChange={this.handleDisplayQuantityChange.bind(this)}>
                    {displayQuantityOptions}
                  </FormControl>
                }
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
