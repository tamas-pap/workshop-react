import { map, flatten } from 'lodash-es';

export const SLIDES_BY_GROUPS = [
  {
    title: 'Getting started with React',
    slides: [
      {
        id: 'introducing-jsx',
        title: 'Introducing JSX',
        codeSandboxId: '2v9xn8j3jp',
      },
      {
        id: 'embedding-expressions-in-jsx',
        title: 'Embedding expressions in JSX',
        codeSandboxId: 'mq3nnowpzj',
      },
      {
        id: 'specifying-attributes-in-jsx',
        title: 'Specifying attributes in JSX',
        codeSandboxId: '38knyyoljq',
      },
      {
        id: 'jsx-represents-objects',
        title: 'JSX represents objects',
        codeSandboxId: '58v8q72xk',
      },
      {
        id: 'components-and-props',
        title: 'Components and Props',
        codeSandboxId: 'j21388ko5w',
      },
      {
        id: 'components-and-pros-lets-code',
        title: "Let's code - Components and Props",
        codeSandboxId: '4jk6wzmlk9',
      },
      {
        id: 'composition-vs-inheritance',
        title: 'Composition vs. inheritance',
        codeSandboxId: '5x945pqr7k',
      },
      {
        id: 'composition-in-react',
        title: 'Composition in React',
        codeSandboxId: 'l4r3k1r3vz',
      },
      {
        id: 'composition-in-react-lets-code',
        title: "Let's code - Composition in React",
        codeSandboxId: 'vj0knkqqz0',
      },
      {
        id: 'props-are-read-only',
        title: 'Props are Read-Only',
        codeSandboxId: '2orql6zokj',
      },
      {
        id: 'working-with-state',
        title: 'Working with state',
        codeSandboxId: 'lr7mzozq0q',
      },
      {
        id: 'working-with-state-lets-code',
        title: "Let's code - Working with state",
        codeSandboxId: '8xykyy9mk0',
      },
      {
        id: 'lifecycle-methods-lets-code',
        title: "Let's code - Lifecycle methods",
        codeSandboxId: '30v7jn68p1',
      },
      {
        id: 'handling-events',
        title: 'Handling events',
        codeSandboxId: 'k59vxnyy2o',
      },
      {
        id: 'handling-events-lets-code',
        title: "Let's code - Handling events",
        codeSandboxId: '0ql2pwommv',
      },
      {
        id: 'lists-and-keys',
        title: 'Lists and keys',
        codeSandboxId: 'jkvkr7o6w',
      },
      {
        id: 'lists-and-keys-lets-code',
        title: "Let's code - Lists and keys",
        codeSandboxId: '53po39wvqp',
      },
      {
        id: 'working-with-forms',
        title: 'Working with forms',
        codeSandboxId: 'z6xr9qjk83',
      },
      {
        id: 'working-with-forms-lets-code',
        title: "Let's code - Working with forms",
        codeSandboxId: 'lp1n5z9lrz',
      },
    ],
  },
  {
    title: 'Create a development environment',
    slides: [
      {
        id: 'setup-webpack-and-babel',
        title: 'Setup Webpack and Babel',
        codeSandboxId: 'pwlqzlxqz0',
      },
      {
        id: 'using-create-react-app',
        title: 'Using create-react-app',
        codeSandboxId: 'q7n52xzj',
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
