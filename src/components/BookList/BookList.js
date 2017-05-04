import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Table } from 'react-bootstrap';
import BookRow from './BookRow';
import Spinner from '../Spinner/Spinner';


class BookList extends Component {
  render(){
    const searchResults = this.props.books.items;

    if(!searchResults) return null;
    if(this.props.isFetching) return (<Spinner />);

    const bookDetails = searchResults.map((book, index) => {
      return (<BookRow key={`result_${index + 1}`} info={book.volumeInfo}/>);
    });

    return(
      <Grid>
        <Row>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Authors</th>
                <th>Date of Publication</th>
              </tr>
            </thead>
            <tbody>
              {bookDetails}
            </tbody>
          </Table>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all,
    isFetching: state.books.isFetching,
    error: state.books.error
  }
}


export default connect(mapStateToProps, null)(BookList);
