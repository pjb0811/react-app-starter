import * as React from 'react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <div>
      <div className="ui three item menu">
        <NavLink exact={true} to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="item" activeClassName="active">About</NavLink>
        <NavLink to="/reduxSagaExample" className="item" activeClassName="active">redux-saga example</NavLink>
        {/* <NavLink to="/reduxThunkExample" className="item" activeClassName="active">redux-thunk example</NavLink> */}
        {/* <NavLink to="/mobxExample" className="item" activeClassName="active">mobx example</NavLink> */}
      </div>
    </div>
  );
};

export default TopMenu;