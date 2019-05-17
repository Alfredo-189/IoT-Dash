import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export class ProtectedRoute extends Component {

  render() {

    const { authData , children } = this.props
    
    return (
      <div>
        {
            authData.isLogin ? 
            <Fragment>
                {children}
            </Fragment> :
            <Redirect to={"/login"} />
        }
      </div>
    )
  }
}