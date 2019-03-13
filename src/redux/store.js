import {createStore , applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const win = window;
const middlewares =[thunkMiddleware];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
  );
export default createStore(rootReducer, {},  storeEnhancers);