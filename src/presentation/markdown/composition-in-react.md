# Composition in React

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen.

For example, we can create an `App` component that renders `Welcome` many times:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Josh" />
      <Welcome name="Lisa" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.
