import { combineReducers } from 'redux';

// Seems that BooksReducer here is just a descriptive name for what
// the ./reducer_books file returns, i.e. application state in the form
// of an array of objects. We could call it anything as long as we use
// the same trm in the combineReducers function.
import BooksReducer from './reducer_books';

// This seems to assign the array of book objects (BooksReducer) to the
// key 'books'. It seems to be available to other project files as 'global'
// state, i.e. the state.books used in the mapStateToProps function.
// The mapStateToProps function maps state.books to 'books' so it is then
// available in the BookList container as this.props.books.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
