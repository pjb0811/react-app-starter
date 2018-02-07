import loadable from 'loadable-components';

export const Home = loadable(() => import('./Home'));
export const About = loadable(() => import('./About'));
export const Counter = loadable(() => import('./Counter'));