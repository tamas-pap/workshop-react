# Introducing Redux

Redux is a predictable state container for JavaScript apps.

### A simple counter implemented with Redux

This is a reducer, a pure function with `(state, action) => state` signature.
It describes how an action transforms the state into the next state.

The shape of the state is up to you: it can be a primitive, an array, an object,
or even an `Immutable.js` data structure.

> The only important part is that you should not mutate the state object, but return a new object if the state changes.

```js
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
```
