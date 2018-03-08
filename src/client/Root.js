import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
// redux
// import { Provider  } from 'react-redux';
// import store from '../redux/store';

// mobx
import Store from '../mobx/Store';
import { Provider } from 'mobx-react';
const store = new Store();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

export default Root;