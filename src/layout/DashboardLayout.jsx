import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'components/sidebar/Sidebar';
import Topbar from 'components/topbar/Topbar';
import dashboardRoutes from 'routes/dashboardRoutes';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { ProtectedRoute } from './../routes/ProtectedRoute';

class DashboardLayout extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Topbar/>
                        <Scrollbars 
                            style={{height:'calc(100vh - 72px)'}}
                            autoHide
                            ref='scrollbars'
                        >                      
                        <div className="route-height">   
                            <Switch>
                                <ProtectedRoute { ...this.props } >
                                    {
                                        dashboardRoutes.map((prop, key) => {
                                        return <Route path={prop.path} component={prop.component} key={key}/>;
                                        })
                                    }
                                </ProtectedRoute>
                            </Switch>   
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
      authData: {
          token: state.auth.accessToken,
          isLogin: state.auth.isLogin,
      }
    };
  }

export default connect(mapStateToProps, null)(DashboardLayout);