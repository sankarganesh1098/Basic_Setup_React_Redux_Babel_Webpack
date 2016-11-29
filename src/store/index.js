import { createStore, applyMiddleware } from 'redux';
import registration from '../reducers'



  const store = createStore(registration, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
