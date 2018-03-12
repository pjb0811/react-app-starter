# react-app-starter
Starter Kit for projects using React.

## Prerequisites
You need to install [nodejs](https://nodejs.org/) for your OS environment.
### Package configuration
- **React**
  - react
  - create-react-app
    - react-app-rewired
  - react-router@v4
  - react-helmet
  - react-hot-loader@v4
  - react-loadable
- **Redux**
  - react-redux
  - redux-actions
  - redux-logger
  - redux-thunk
    - redux-promise-middleware
  - redux-saga
  - immutable
- **MobX**
  - mobx-react
- **CSS Framework**
  - semantic-ui-css
  - semantic-ui-react
- **Server Side Rendering**
  - express
- **Module Loader/bundler**
  - webpack
- **Package Manager**
  - yarn

## Installation Process
### Installing the package
```
  npm install
```

## Getting Started
### Run local server
```
  npm run start
```
### Build source
```
  npm run build
```
### Run the development server after the source build
```
  npm run serve
```
### Change the state management library(mobx <-> redux-saga <-> redux-thunk)
#### src/client/Root.js
```
// redux-saga
import { Provider  } from 'react-redux';
import store from '../redux-saga/store';

// redux-thunk
import { Provider  } from 'react-redux';
import store from '../redux-thunk/store';

// mobx
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';
const store = new Store();
...
...
```
#### src/server/render.js
```
// redux-saga
import { Provider  } from 'react-redux';
import configureStore from '../redux-saga/store';
const store = configureStore();

// redux-thunk
import { Provider } from 'react-redux';
import store from '../redux-thunk/store';

// mobx
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';
const store = new Store()
...
...
const render = async (location) => {
  ....
  return {
    html,
    // redux-thunk, redux-saga
    state: store.getState(),
    // mobx
    state: toJS(store),
    helmet,
  };
};
```

### SSR settings for async data.
Planned to proceed.

## File Manifest
```
+-- server
|   +-- index.js
+-- src
|   +-- client
|       +-- Root.js
|   +-- components
|       +-- menus
|       +-- pages
|   +-- mobx
|       +-- Store.jsx
|   +-- redux-saga
|       +-- actions
|       +-- api
|       +-- reducers
|       +-- sagas.js
|       +-- store.js
|   +-- redux-thunk
|       +-- reducers
|       +-- store.js
|   +-- server
|       +-- render.js
|   +-- App.js
|   +-- index.js
```

## Copyright / End User License
MIT © [pjb0811](http://github.com/pjb0811)

## Contact Information
- [pjb0811@gmail.com](mailto:pjb0811@gmail.com)
- [http://github.com/pjb0811](http://github.com/pjb0811)

<!--
## Known Issues
## Troubleshooting
## redit
-->
