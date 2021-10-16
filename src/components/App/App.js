import React, { useReducer } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ContextApp, initialState, reducer } from '../../model/reducer';
import './App.css';
import HomePage from '../../pages/home';
import SettingsPage from '../../pages/settings';
import HistoryPage from '../../pages/history';

const App = (props) => {
  const { history } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const hasSettingData = state.formFields.repoName.value !== '';

  return (
    <div className="app">
      <ContextApp.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/settings" history={history}>
            <SettingsPage />
          </Route>
          <Route path="/" history={history}>
            {hasSettingData ? <HistoryPage /> : <HomePage />}
          </Route>
        </Switch>
      </ContextApp.Provider>
    </div>
  );
};

export default withRouter(App);
