# Using Redux with React

From the very beginning, we need to stress that Redux has no relation to React. You can write Redux apps with React,
Angular, Ember, jQuery, or vanilla JavaScript.

That said, Redux works especially well with libraries like React because they let you describe UI as a function of
state, and Redux emits state updates in response to actions.

We will use React to build our simple todo app.

### Presentational and Container Components

React bindings for Redux embrace the idea of [separating presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).


Let's recount their differences:

|                    | Presentational Components   | Container Components     |
| ------------------ | --------------------------- | ------------------------ |
| **Purpose**        | How things look             | How things work          |
| **Aware of Redux** | No                          | Yes                      |
| **To read data**   | Read data from props        | Subscribe to Redux state |
| **To change data** | Invoke callbacks from props | Dispatch Redux actions   |

Most of the components we'll write will be presentational, but we'll need to generate a few container components to
connect them to the Redux store.

Technically you could write the container components by hand using `store.subscribe()`. We don't advise you to do this
because React Redux makes many performance optimizations that are hard to do by hand. For this reason, rather than write
container components, we will generate them using the `connect()` function provided by React Redux, as you will see
below.

### Connect to a Redux store

We will implement the counter example with React & Redux.

First, let's talk about the `connect()` function. When we want to connect a component to the Redux store, we use the
`connect()` function, which has the following signature: `connect(mapStateToProps, mapDispatchToProps)(Component)`;

* Use `mapStateToProps` to map properties from the Redux store as `props` for the `Component`.
* Use `mapDispatchToProps` to map action creators as `props` for the `Component`.

Let's start by creating the store.

`store.js`

```js
import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

const store = createStore(counterReducer);

export default store;
```

Now, let's create the `Counter` component.

`Counter.js`
```js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './store';

const Counter = props => (
  <div>
    <button onClick={props.decrement}>-</button>
    <span>{props.value}</span>
    <button onClick={props.increment}>+</button>
  </div>
);

const mapStateToProps = state => ({
  value: state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

Finally, let's create the `App` component.

`App.js`
```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
```

### Let's code

Implement the email list example using React & Redux. For simplicity start with the following email list:

```js
const emails = [
  { id: 1, author: 'Amy Aniston', subject: 'Hello from Amy', body: 'Hi! This is Amy. How are you?' },
  { id: 2, author: 'Bernadett Benetton', subject: 'Hello from Bernadett', body: 'Hi! This is Bernadett. How are you?' },
  { id: 3, author: 'Carol Crowford', subject: 'Hello from Carol', body: 'Hi! This is Carol. How are you?' },
  { id: 4, author: 'Diana Dacy', subject: 'Hello from Diana', body: 'Hi! This is Diana. How are you?' },
  { id: 5, author: 'Emily Edwards', subject: 'Hello from Emily', body: 'Hi! This is Emily. How are you?' },
];
```
