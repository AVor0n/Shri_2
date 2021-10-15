import React from 'react';
import fakeBuilds from './fake-data';

export const ContextApp = React.createContext();

export const initialState = {
  repoName: '',
  buildCommand: '',
  mainBranch: '',
  syncPeriod: '',
  builds: fakeBuilds,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'repoName_update':
      return {
        ...state,
        repoName: action.payload,
      };
    case 'buildCommand_update':
      return {
        ...state,
        buildCommand: action.payload,
      };
    case 'mainBranch_update':
      return {
        ...state,
        mainBranch: action.payload,
      };
    case 'syncPeriod_update':
      return {
        ...state,
        syncPeriod: action.payload,
      };
    default:
      return state;
  }
};
