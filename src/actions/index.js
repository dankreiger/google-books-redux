import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';


const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q='


export function fetchBooks(searchQuery) {
  const request = axios.get(`${ROOT_URL}${searchQuery}`);
  return {
    type: FETCH_BOOKS,
    payload: request
  };
}
