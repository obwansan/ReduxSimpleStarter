/*
* Using a word, like React, imports the whole object from the file.
* Using a word in curly braces imports just a single property from
the object.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from ../actions/index;
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
// The state argument passed in is the application state (redux)
// The mapStateToProps function connects redux (application state) to
// the react containers / smart components. The point of connection is
// the key-value pair mapping of state (state.books) to props (books).
function mapStateToProps(state) {
  // Whatever is returned will show up as this.props inside the container (BookList).
  // So the books key that holds/references state.books will be mapped to
  // this.props.books in BookList.
  return {
    books: state.books
  };
}

// The value selectBook in the key:value pair 'selectBook: selectBook' is the
// bindActionCreator imported at the top of this file.
// Anything returned from mapDispatchToProps will end up as props on the BookList
// container. Using this.props.selectBook in the BookList container will call our
// action creator selectBook() from actions/index.js
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result (in this case a normal JS object
  // containing a key:value pair title: 'book name') should be passed (dispatched)
  // to all of our reducers.
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop in the container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
