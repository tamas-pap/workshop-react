# Using the `<Form />` component

`<Form />` is a small wrapper around an HTML `<form />` element that automatically hooks into Formik's `handleSubmit` and `handleReset`. All other props are passed directly through to the DOM node.

```js
// so...
<Form />

// is identical to this...
<form onReset={props.handleReset} onSubmit={props.handleSubmit} {...props} />
```
