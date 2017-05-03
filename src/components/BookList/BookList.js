import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Table } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';


class BookList extends Component {
  render(){
    const totalResults  = this.props.books.totalItems;
    const searchResults = this.props.books.items;

    if(!totalResults) return (<div>nothing</div>) ;
    if(!searchResults.length) return (<Spinner />);

    const bookDetails = searchResults.map((book, index) => {
      const info = book.volumeInfo;
      return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={info.imageLinks.smallThumbnail} /></td>
          <td>{info.title}</td>
          <td>{info.description}</td>
          <td>{info.authors.join(', ')}</td>
          <td>{info.publishedDate}</td>
        </tr>
      );
    });

    if(bookDetails){
      return(
        <Grid>
          <Row>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Result #</th>
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
}

function mapStateToProps(state){
  return { books: state.books.all }
}


export default connect(mapStateToProps, null)(BookList);
