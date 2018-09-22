import { applyMiddleware } from 'redux';
import reduxDevTools from './redux-dev-tools';
import sync from './sync';

export default reduxDevTools(applyMiddleware(sync));
