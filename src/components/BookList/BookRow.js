import React from 'react';
import { browserHistory } from 'react-router';
import './BookRow.css';

const BookRow = (props) => {
  return (
      <tr className='bookRow' onClick={() => browserHistory.push(`/${props.resultNumber}`)}>
        <td><img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : null} alt='bookImage' /></td>
        <td>{props.book.volumeInfo.title}</td>
        <td>{props.book.volumeInfo.description}</td>
        <td>{props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join(', ') : null}</td>
        <td>{props.book.volumeInfo.publishedDate}</td>
      </tr>
  )
}

export default BookRow;
