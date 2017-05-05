import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes.js';
import {persistStore, autoRehydrate} from 'redux-persist';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  autoRehydrate()
);
persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
