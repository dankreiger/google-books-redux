import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Pagination } from 'react-bootstrap';
import './Pagination.css';


class BooksPagination extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props.books);
    if(this.state.activePage !== prevState.activePage){
      this.props.fetchBooks(
        !!this.props.searchQuery ? this.props.searchQuery : this.props.lastSearchQuery, this.props.resultsPerPage, this.state.activePage * this.props.resultsPerPage
      );
    }
  }

  render(){
    console.log(this.props)
    return(
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={Math.ceil(this.props.books.totalItems / this.props.resultsPerPage)}
        maxButtons={5}
        bsSize="small"
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)} />

    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all,
    lastSearchQuery: state.books.lastSearchQuery
  }
}


export default connect(mapStateToProps, actions)(BooksPagination);
