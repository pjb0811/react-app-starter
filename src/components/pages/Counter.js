import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../../redux/modules/counter';

class Counter extends React.Component {
  render() {
    const { counter, CounterActions } = this.props;
    return (
      <div>
      <h1>{counter}</h1>
      <button onClick={CounterActions.increment}>+</button>
      <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    counter: state.counter,
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
  })
)(Counter);