import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // When the app first boots up, this.props.book will be null so you'll get
    // this message. When the user clicks on a book it causes the application
    // state to update, which causes the BookDetail container to rerender, because
    // it's been hooked up to redux via the connect() and mapStateToProps functions.
    // When it rerenders this.props.book will hold the book object with a title
    // property.
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Page: {this.props.book.pages}</div>
      </div>
    );
  }
}
// The combineReducers function in reducers/index.js has assigned ActiveBook
// to the activeBook key on the global state object. It can therefore be mapped
// to the prop 'book' here.
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}
// Promote BookDetail from a component to a container - it needs to know about
// the value of activeBook. Make it available as a prop in the container.
export default connect(mapStateToProps)(BookDetail);
