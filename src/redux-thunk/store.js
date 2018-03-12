// redux-thunk
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const logger = createLogger();
const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
});

const store = createStore(
  reducers,
  applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware)
);

export default store;

