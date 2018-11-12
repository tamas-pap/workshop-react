import { map, flatten } from 'lodash-es';

export const SLIDES_BY_GROUPS = [
  {
    title: 'Getting started with React',
    slides: [
      {
        id: 'introducing-jsx-1',
        title: 'Introducing JSX 1',
        codeSandboxId: '4wq4m4o85w',
      },
      {
        id: 'introducing-jsx-2',
        title: 'Introducing JSX 2',
        codeSandboxId: '4nzykly49',
      },
      {
        id: 'introducing-jsx-3',
        title: 'Introducing JSX 3',
        codeSandboxId: 'w7wq32jk9w',
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
