import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import layoutRoutes from "routes/index";
import 'assets/scss/app.scss';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={hist}>     
            <Switch>
              <Route exact path='/' render={() => (
                <Redirect to='/dashboard' />
              )} />
              {layoutRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} history={hist}/>;
              })}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
