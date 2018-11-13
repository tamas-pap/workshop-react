# Working with Forms

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

```js
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

#### Default values for controller components

If you want to specifify a default value for a controlled component you can simply set that value in the state:

```js
this.state = { name: 'John' };
```
