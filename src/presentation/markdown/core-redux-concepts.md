# Core Redux concepts

>
> The whole state of the application is described by a single javascript object.

This is how a the state of a simple Todo application would look like:

```js
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

>
> To change something in the state, you need to dispatch an action.

An action is a plain JavaScript object that describes what happened. Here are a few example actions:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

>
> We write functions called reducers to mutate the state, and return the next state of the app.

Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app.
If something changed, we know why it changed.

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);

    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) => (action.index === index ? { text: todo.text, completed: !todo.completed } : todo),
      );

    default:
      return state;
  }
}
```

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}
```
