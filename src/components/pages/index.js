import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const loadableComponent = (component) => {
  return Loadable({
    loader: () => import(`${component}`),
    modules: [component],
    webpack: () => [require.resolveWeak(`${component}`)],
    loading() {
      return <Loading/>
    }
  });
};

export const Home = loadableComponent('./Home');
export const About = loadableComponent('./About');
export const ReduxExample = loadableComponent('./ReduxExample');
export const MobxExample = loadableComponent('./MobxExample');

