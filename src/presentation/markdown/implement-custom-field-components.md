# Implement custom `<Field />` components

You can use `<Field />` with custom components like this:

```js
const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props}) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

...

<Field components={CustomerInputComponent}>
```
