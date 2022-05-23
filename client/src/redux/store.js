import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD
import thunk from  'redux-thunk';
=======
import thunk from 'redux-thunk';
>>>>>>> 4d7be4f5f734c7cef95ad0d2035cd30be1dea64e

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
