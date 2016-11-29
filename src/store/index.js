import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export function createAppStore(reducerMap) {
  return createStore(
    combineReducers(reducerMap),
    composeWithDevTools(
      applyMiddleware()
    )
  );
}

/**
 * Takes a map of action types to reducers, and returns a composite reducer.
 * When it takes in an action, it will pick the corresponding reducer based on
 * the action's type.
 */
export function combineReducersByAction(reducerMap, initialState) {
  return (state = initialState, action) => {
    if (action.type in reducerMap) {
      return reducerMap[action.type](state, action);
    }

    return state;
  };
}