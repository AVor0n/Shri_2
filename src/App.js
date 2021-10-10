import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home';
import SettingsPage from './pages/settings';
import HistoryPage from './pages/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoName: '',
      buildCommand: '',
      mainBranch: '',
      syncPeriod: '',
      builds: [],
    };
  }

  updateData(setting) {
    this.setState(setting);
    console.log(JSON.stringify(this.state));
  }

  render() {
    const { history } = this.props;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/settings"
            render={() => (
              <SettingsPage
                data={this.state}
                handlerSaveSettings={this.updateData.bind(this)}
              />
            )}
            history={history}
          />
          <Route history={history} path="/">
            {this.state.repoName ? (
              <HistoryPage data={this.state} />
            ) : (
              <HomePage />
            )}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
