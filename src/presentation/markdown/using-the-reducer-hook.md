# Using the Reducer Hook

An alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method.
If you’re familiar with Redux, you already know how this works.

Here’s the counter example from the useState section, rewritten to use a reducer:

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

### Lazy initialization

`useReducer` accepts an optional third argument, `initialAction`. If provided, the initial action is applied during the initial render. This is useful for computing an initial state that includes values passed via `props`:

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {count: action.payload};
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    {type: 'reset', payload: initialCount},
  );

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```
