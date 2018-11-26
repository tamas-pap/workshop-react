# The three principles of Redux

Redux can be described in three fundamental principles:

### 1. Single source of truth

The state of your whole application is stored in an object tree within a single store.

```js
console.log(store.getState());
```

will print

```js
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

### 2. State is read-only

The only way to change the state is to emit an `action`, an object describing what happened.
As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing
purposes.

```js
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1,
});

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
});
```

### 3. Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to
return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app
grows, split it off into smaller reducers that manage specific parts of the state tree.

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

import { combineReducers, createStore } from 'redux';
const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);
```
