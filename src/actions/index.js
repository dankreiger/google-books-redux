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

function fetchingBooks(lastSearchQuery, maxResults, startIndex) {
  return {
    type: FETCHING_BOOKS,
    payload: {
      searchQuery: lastSearchQuery,
      maxResults: maxResults,
      startIndex: startIndex
    }
  }
}

export function fetchBooks(lastSearchQuery, maxResults, startIndex) {
  return function (dispatch) {
    dispatch(fetchingBooks(lastSearchQuery, maxResults, startIndex));
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params:
        { q: lastSearchQuery, maxResults: maxResults, startIndex: startIndex }
    })
    .then(response => {
      dispatch(fetchBooksSuccess(response));
    })
    .catch(err => {
      dispatch(fetchBooksError(err));
    })
  }
}
