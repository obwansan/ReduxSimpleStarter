import { combineReducers } from 'redux';

// Seems that BooksReducer here is just a descriptive name for what
// the ./reducer_books file returns, i.e. application state in the form
// of an array of objects. We could call it anything as long as we use
// the same trm in the combineReducers function.
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
