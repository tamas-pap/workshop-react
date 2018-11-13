# Let's code

### About lifecycle methods

Each component has several “lifecycle methods” that you can override to run code at particular times in the process. Methods prefixed with `will` are called right before something happens, and methods prefixed with `did` are called right after something happens.

Here you can find the [complete list of lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle).

### Implement a Clock component using state and lifecycle methods

Use `state` to keep the current time.
Use `componentDidMount` to create a timer.
Use `componentDidWillUnmount` to clear the timer.

Make the `Clock` accept a `timezone` prop.
Render multiple `Clocks` with different timezones.
