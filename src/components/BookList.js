import React, {Component} from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions';

class BookList extends Component {
  render(){
    if(!this.props.books.items){
      return(<div>Loading</div>);
    }
    const bookList = this.props.books.items.map((book, index) => {
      return(<li key={index}>{book.volumeInfo.title}</li>);
    });
    if(bookList){
      return(
        <div>
          <ul>{bookList}</ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {books: state.books.all}
}


export default connect(mapStateToProps, null)(BookList);
