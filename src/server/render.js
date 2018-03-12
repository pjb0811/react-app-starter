import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';
import { Helmet } from 'react-helmet';

// // redux
import { Provider } from 'react-redux';
import store from '../redux/store';

// // mobx
// import { toJS } from 'mobx';
// import { Provider } from 'mobx-react';
// import Store from '../mobx/Store';

const render = async (location) => {
  // const store = new Store();  //mobx
  const helmet = Helmet.renderStatic();
  const context = {};

  const html = await ReactDOMServer.renderToString(
    <StaticRouter location={location} context={context}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  return {
    html,
    state: store.getState(),  // redux
    // state: toJS(store),    // mobx
    helmet,
  };
};

export default render;