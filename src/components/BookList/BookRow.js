import React from 'react';

const BookRow = (props) => {
  return (
    <tr>
      <td><img src={props.info.imageLinks ? props.info.imageLinks.smallThumbnail : null} /></td>
      <td>{props.info.title}</td>
      <td>{props.info.description}</td>
      <td>{props.info.authors ? props.info.authors.join(', ') : null}</td>
      <td>{props.info.publishedDate}</td>
    </tr>
  )
}

export default BookRow;
