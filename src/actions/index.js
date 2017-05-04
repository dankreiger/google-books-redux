import axios from 'axios';

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const FETCHING_BOOKS = 'FETCHING_BOOKS';

export function fetchBooksSuccess(response) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: response
  }
}

export function fetchBooksError(error) {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  }
}

export function fetchingBooks(searchQuery) {
  const response = axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: searchQuery } });

  return {
    type: FETCHING_BOOKS,
    payload: response
  }
}
