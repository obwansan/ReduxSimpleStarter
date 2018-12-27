// All reducers get two arguments, the current state and an action.
// Reducers are only called when an action is dispatched by the app.
// The state argument is not application state, only the state this
// reducer is responsible for.

// Before an action occurs (i.e. when the app first loads, before a
// user has done anything), state would be undefined. Redux doesn't allow
// undefined to be returned from a reducer (throws an error) so we assign
// the state parameter a default null value.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
