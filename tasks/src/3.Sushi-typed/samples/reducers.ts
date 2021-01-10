// эталонная реализация createReducer
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

// эталонная реализация combineReducers
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

///////////////////////////////////////////////////

const defaultA = 1;
const defaultB = 2;

const sliceReducerA = createReducer(defaultA, {
  ['UPDATE']: (state, action) => {/* ... */}
});
const sliceReducerB = createReducer(defaultB, {
  ['UPDATE']: (state, action) => {/* ... */}
});

const combinedReducer = combineReducers({
  a: sliceReducerA,
  b: sliceReducerB
});

function handleSpecialCaseForA(/* ... */) {
  /* ... */
}

function crossSliceReducer(state, action) {
  switch (action.type) {
    case 'SOME_SPECIAL_ACTION': {
      return {
        // специально state.b передается как дополнительный аргумент
        a: handleSpecialCaseForA(state.a, action, state.b),
        b: sliceReducerB(state.b, action)
      };
    }
    default:
      return state;
  }
}

function rootReducer(state, action) {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
}
