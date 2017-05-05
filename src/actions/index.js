import axios from 'axios';


export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const FETCHING_BOOKS = 'FETCHING_BOOKS';


function fetchBooksSuccess(response) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: response
  }
}

function fetchBooksError(error) {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  }
}

function fetchingBooks() {
  return {
    type: FETCHING_BOOKS
  }
}

export function fetchBooks(searchQuery, maxResults) {
  return function (dispatch) {
    dispatch(fetchingBooks());
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params:
        { q: searchQuery, maxResults: maxResults }
    })
    .then(response => {
      dispatch(fetchBooksSuccess(response));
    })
    .catch(err => {
      dispatch(fetchBooksError(err));
    })
  }
}
