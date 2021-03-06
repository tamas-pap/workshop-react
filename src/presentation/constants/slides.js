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
    title: 'Introduction to React Hooks',
    slides: [
      {
        id: 'using-the-state-hook',
        title: 'Using the State Hook',
        codeSandboxId: 'l75p22o409',
      },
      {
        id: 'using-the-effect-hook',
        title: 'Using the Effect Hook',
        codeSandboxId: '30ywk42165',
      },
      {
        id: 'using-effects-with-cleanup',
        title: 'Using effects with cleanup',
        codeSandboxId: '14ror86q04',
      },
      {
        id: 'using-the-reducer-hook',
        title: 'Using the Reducer Hook',
        codeSandboxId: '8l10ljn878',
      },
      {
        id: 'rules-of-hooks',
        title: 'Rules of Hooks',
        codeSandboxId: 'oj55p8k409',
      },
      {
        id: 'using-hooks-lets-code',
        title: "Let's code - Using Hooks",
        codeSandboxId: '8l16402jo8',
      },
    ],
  },
  {
    title: 'Introduction to Redux',
    slides: [
      {
        id: 'introduction-to-redux',
        title: 'Introduction to Redux',
        codeSandboxId: 'z6nkrjppxx',
      },
      {
        id: 'core-redux-concepts',
        title: 'Core Redux concepts',
        codeSandboxId: '5y3nq65x9k',
      },
      {
        id: 'the-three-principles-of-redux',
        title: 'The three principles of Redux',
        codeSandboxId: 'mm1q4p4mpp',
      },
      {
        id: 'using-redux-lets-code',
        title: "Let's code - Using Redux",
        codeSandboxId: 'yk3vyxyp59',
      },
      {
        id: 'using-redux-with-react',
        title: 'Using Redux with React',
        codeSandboxId: 'k3ylj1m497',
      },
      {
        id: 'using-redux-with-react-lets-code',
        title: "Let's code - Using Redux with React",
        codeSandboxId: '613370qp2w',
      },
      {
        id: 'redux-middlewares',
        title: 'Redux middlewares',
        codeSandboxId: 'm33krqxqky',
      },
    ],
  },
  {
    title: 'Introduction to Formik',
    slides: [
      {
        id: 'create-a-simple-form-with-formik',
        title: 'Create a simple form with Formik',
        codeSandboxId: '7kvymoo0yj',
      },
      {
        id: 'implement-validation-with-formik',
        title: 'Implement validation with Formik',
        codeSandboxId: 'q9jq469w3w',
      },
      {
        id: 'using-a-validation-schema-with-formik',
        title: 'Using a validation schema with Formik',
        codeSandboxId: 'qxlkwlw7v6',
      },
      {
        id: 'using-the-with-formik-hoc',
        title: 'Using the withFormik HOC',
        codeSandboxId: 'w6jpnrpjw5',
      },
      {
        id: 'using-the-field-component',
        title: 'Using the Field component',
        codeSandboxId: '20157r167j',
      },
      {
        id: 'implement-custom-field-components',
        title: 'Implement custom Field components',
        codeSandboxId: 'qx7vovv77q',
      },
      {
        id: 'using-the-form-component',
        title: 'Using the Form component',
        codeSandboxId: '437nom5wk7',
      },
    ],
  },
  {
    title: 'Introduction to React router',
    slides: [
      {
        id: 'basic-routing',
        title: 'Basic routing',
        codeSandboxId: 'mq10858vx8',
      },
      {
        id: 'working-with-url-parameters',
        title: 'Working with URL params',
        codeSandboxId: '189k2vkjx3',
      },
      {
        id: 'ambiguous-url-parameters',
        title: 'Ambiguous URL parameters',
        codeSandboxId: 'l6rkrop8l',
      },
      {
        id: 'working-with-query-parameters',
        title: 'Working with query parameters',
        codeSandboxId: 'qv5v05vxjq',
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
      {
        id: 'setup-your-code-editor',
        title: 'Setup your code editor',
        codeSandboxId: '4zx3zwv2n4',
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
