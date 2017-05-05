import React from 'react';

const BookRow = (props) => {
  return (
    <tr>
      <td>{props.resultNumber}</td>
      <td><img src={props.info.imageLinks ? props.info.imageLinks.smallThumbnail : null} alt='bookImage' /></td>
      <td>{props.info.title}</td>
      <td>{props.info.description}</td>
      <td>{props.info.authors ? props.info.authors.join(', ') : null}</td>
      <td>{props.info.publishedDate}</td>
    </tr>
  )
}

export default BookRow;
