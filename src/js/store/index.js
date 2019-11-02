import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todosReducer from '../reducers/index';
import logger from '../middlewares/logger';

const store = createStore(todosReducer, applyMiddleware(logger, thunk));

export default store;
