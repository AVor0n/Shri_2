import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/home';
import SettingsPage from '../../pages/settings';
import HistoryPage from '../../pages/history';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="app">
        <Switch>
          <Route path="/settings" history={history}>
            <SettingsPage />
          </Route>
          <Route path="/" history={history}>
            {true ? <HistoryPage /> : <HomePage />}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
