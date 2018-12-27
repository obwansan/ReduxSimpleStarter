import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
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
