//1. Same API as <Route/>
//2. has to render a <route/>, pass in all props from <privateRoute/>
//redirect to a '/login if user in not authenticated, otherwise diplay the componenet

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//destructure props and rename component to Component
//the ...rest bring all the props back together with the renamed Component
//component is brought in from Apps ex. component={FriendsList}
const PrivateRoute = ({
  component: Component,
  token,
  errorStatusCode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
//                      this is token from state
const mapStateToProps = ({ token, errorStatusCode }) => ({
  token
});
// the mapstatetoprops can also be written like:
//const mapStateToProps = state => {
//return {token: state.token
//  };
//};
//the one above is the shorthand version.
export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
