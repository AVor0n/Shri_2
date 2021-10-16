import React from 'react';
import fakeBuilds from './fake-data';

export const ContextApp = React.createContext();

export const initialState = {
  formFields: {
    repoName: {
      value: '',
      defaultValue: '',
      buffer: '',
      type: 'block',
      label: 'GitHub repository',
      placeholder: 'user-name/repo-name',
      require: true,
    },
    buildComand: {
      value: '',
      defaultValue: '',
      buffer: '',
      type: 'block',
      label: 'Build command',
      placeholder: 'npm ci && npm run build',
      require: true,
    },
    mainBranch: {
      value: '',
      defaultValue: 'master',
      buffer: '',
      type: 'block',
      label: 'Main branch',
      placeholder: 'master',
      require: false,
    },
    syncPeriod: {
      value: '',
      defaultValue: '10',
      buffer: '',
      type: 'inline',
      before: 'Synchronize every',
      placeholder: '10',
      after: 'minutes',
      require: false,
    },
  },
  builds: fakeBuilds,
  newBuild: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'field_update': {
      const newState = Object.assign({}, state);
      newState.formFields[action.field].buffer = action.payload;
      return newState;
    }
    case 'form_save': {
      const newState = Object.assign({}, state);
      Object.values(newState.formFields).map(
        (field) =>
          (field.value = field.buffer = field.buffer || field.defaultValue)
      );
      return newState;
    }
    case 'form_cancel': {
      const newState = Object.assign({}, state);
      Object.values(newState.formFields).map(
        (field) => (field.buffer = field.value)
      );
      return newState;
    }
    case 'build_update': {
      const newState = Object.assign({}, state);
      newState.newBuild = action.payload;
      return newState;
    }
    case 'build_run': {
      const newState = Object.assign({}, state);
      newState.newBuild = '';
      return newState;
    }
    case 'build_cancel': {
      const newState = Object.assign({}, state);
      newState.newBuild = '';
      return newState;
    }
    default:
      return state;
  }
};
