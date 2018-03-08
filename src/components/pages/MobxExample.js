import * as React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class MobxExample extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <div>
        <h1>{ store.counter }</h1>
        <button
          onClick={store.increase}>
          +
        </button>
        <button
          onClick={store.decrease}>
          -
        </button>
      </div>
    );
  }
}

export default MobxExample;