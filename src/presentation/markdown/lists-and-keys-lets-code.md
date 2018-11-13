# Let's code

### Create an `<InventorsList/>` component, having multiple `<Inventor />` components

Each items should look like: _Albert Einstein, born in 1879_.

You can work with this list:

```js
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Plank', year: 1858 },
];
```

### Create a <MovieList> component, having multiple `<Movie>` components

Load movies from `https://raw.githack.com/tamas-pap/playground-es6/master/src/data/movies.json` using `fetch`.

Make the `<MovieList`> accept a `limit` and `sortBy` property.
