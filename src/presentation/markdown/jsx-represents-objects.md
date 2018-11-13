# JSX Represents Objects

Babel compiles JSX down to `React.createElement()` calls.

These two examples are identical:

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  'h1',
  {
    className: 'greeting',
  },
  'Hello, world!',
);
```

`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};
```

### Let's see Babel in action

Transpile the following JSX code snippets with [Babel](https://babeljs.io/repl).

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = (
  <div>
    <img src={user.avatar} alt="" />
    <h1>Hello {user.firstName}</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```
