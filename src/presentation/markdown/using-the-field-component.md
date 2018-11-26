# Using the `<Field />` component

`<Field />` will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. `<Field />` will default to an HTML `<input />` element.

```js
// Renders an HTML <input> by default
<Field name="lastName" placeholder="Last Name"/>

// Renders and HTML input with type password
<Field name="lastName" type="password" placeholder="Last Name"/>

// Renders an HTML <select>
<Field name="color" component="select" placeholder="Favorite Color">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</Field>
```
