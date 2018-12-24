/*
* Using a word, like React, imports the whole object from the file.
* Using a word in curly braces imports just a single property from
the object.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

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

// The connect function takes a component (BookList) and a mapStateToProps function
// and returns a container / smart component (a component that is aware of the state
// contained by redux)
export default connect(mapStateToProps)(BookList);
