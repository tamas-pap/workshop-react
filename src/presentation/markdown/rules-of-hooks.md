# Rules of Hooks

### Only Call Hooks at the Top Level

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple `useState` and `useEffect` calls.

### Only Call Hooks from React Functions

Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.  
✅ Call Hooks from custom Hooks

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

### You can use multiple state and effect Hooks in a component

```js
function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}
```
