import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../../redux-saga/actions/counter';
import * as postActions from '../../redux-saga/actions/post';

class ReduxSagaExample extends React.Component {
  componentWillMount() {
    const { counter } = this.props;
    this.getPost(counter);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.counter !== nextProps.counter) {
      this.getPost(nextProps.counter);
    }
  }

  getPost = async (id) => {
    const { PostActions } = this.props;
    PostActions.requestPost(id);
  }

  render() {
    const { post, counter, CounterActions } = this.props;
    const result = post.toJS();

    return (
      <div>
      <h1>{counter}</h1>
      <button onClick={CounterActions.incrementAsync}>+</button>
      <button onClick={CounterActions.decrementAsync}>-</button>
      {
        result.pending ?
          <h2>Loading...</h2> :
          result.error ?
            <h1>Error!</h1> : (
              <div>
                  <h1>{result.data.title}</h1>
                  <p>{result.data.body}</p>
              </div>
          )
      }
      </div>
    );
  }
}

export default connect(
  (state) => ({
    counter: state.counter,
    post: state.post
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(ReduxSagaExample);