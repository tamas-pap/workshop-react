# Redux middlewares

Redux middlewares provide a third-party extension point between dispatching an action, and the moment it reaches the
reducer.

### Logger middleware example

```js
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};
```

### Crash reporter middleware example

```js
const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};
```

Here's how to apply it to a Redux store:

```js
import { createStore, applyMiddleware } from 'redux';
let store = createStore(counterReducer, applyMiddleware(logger, crashReporter));
```
