# Embedding Expressions in JSX

You can embed any [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) in JSX by wrapping it in curly braces.

For example, `2 + 2`, `user.firstName`, and `formatName(user)` are all valid expressions.

### Let's code

**1. Display the current time with React.**

E.g. _The current time is 8:00 AM._

```js
// Create a new date object with the current time
const now = new Date();

// To read the current time as string
now.toLocaleTimeString();
```

**2. Bring the clock to life with setInterval.**

Observe which parts of the DOM are re-rendered.
