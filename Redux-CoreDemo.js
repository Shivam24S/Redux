// importing redux
const redux = require("redux");

// reducer function which pass action to our central store it takes two parameters state, and action we have to pass intrastate to our state
// we have to pass our  reducer function to store as parameter

const counterReducer = (state = { counter: 0 }, action) => {
  // based on action increment decrement
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  //   otherwise return state
  return state;
};

// creating store for central state management
const store = redux.createStore(counterReducer);

console.log(store.getState());

// subscriber who connected to the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// now dispatch action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
