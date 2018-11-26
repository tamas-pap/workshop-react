# Let's code

Create a Redux store for a list of emails.

The store will look like this:

```js
[{
  id: String,
  from: String,
  to: String,
  subject: String,
  message: String
}]
```

The following options needs to be implemented:

```js
addEmail(id, author, subject, body)
markAsRead(id)
archive(id)
delete(id)
```

>
> Once implemented, simplify the code by using action creator functions.
