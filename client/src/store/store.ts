import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducers from './root';
import { apiFactory } from 'api';
export const configureStore = () => {
  const api = apiFactory();
  // composeWithDevTools
  const middlewares = composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api }))
  );
  const store = createStore(reducers, middlewares);
  return store;
};
