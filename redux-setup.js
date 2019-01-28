// App.js
// Wrap your App in Provider with store
import { Provider } from 'react-redux';

import store from './store';

<Provider store={store}>
  <App />
</Provider>;

// store 
// setup store, pass in your reducer
import { createStore } from 'redux';
import name_of_reducer_here from '../reducers';

const store = createStore(
  name_of_reducer_here,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// reducer 
import { NAME_OF_TYPE } from "../actions/types";

const initialState = {
  whatever: 'goes here'
};

const name_of_reducer_here = (state = initialState, action) => {
  switch (action.type) {
    case NAME_OF_TYPE:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default name_of_reducer_here;

// action types
// define your types as variables
export const NAME_OF_TYPE = 'NAME_OF_TYPE';

// actions
// set up actions using type variables, run logic in your actions
import { NAME_OF_TYPE } from './types';

export const name_of_action_here = count => {
  return {
    type: NAME_OF_TYPE,
    payload: count + 1
  };
};

// linking components
import { connect } from "react-redux";
import { name_of_action_here } from "../actions";

nameYourMethod = () => {
  this.props.name_of_action_here(this.props.whatever);
};

<button onClick={this.nameYourMethod}>Do A Thing</button>

const mapStateToProps = state => {
  return {
    whateverYouWant: state.whateverYouWant
  };
};

export default connect(
  mapStateToProps,
  {
    name_of_action_here
  }
)(ComponentNameHere);
