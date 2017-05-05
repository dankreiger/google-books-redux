import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import BooksIndex from './components/BooksIndex/BooksIndex';
import BooksShow from './components/BooksShow/BooksShow';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BooksIndex} />
    <Route path=":id" component={BooksShow} />
  </Route>
);
