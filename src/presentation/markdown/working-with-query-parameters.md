# Query parameters

React Router does not have any opinions about how you parse URL query strings. Some applications use simple key=value query strings, but others embed arrays and objects in the query string. So it's up to you to parse the search string yourself.

In modern browsers that support the URL API, you can instantiate a `URLSearchParams` object from `location.search` and use that.

In browsers that do not support the URL API (see: IE) you can use a 3rd party library such as `query-string`.
