import React from 'react';
import fakeBuilds from './fake-data';

export const ContextApp = React.createContext();

export const initialState = {
  repoName: '',
  buildCommand: '',
  mainBranch: '',
  syncPeriod: '',
  builds: fakeBuilds,
  buffer: {
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    syncPeriod: '',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'repoName_update':
      return {
        ...state,
        buffer: {
          ...state.buffer,
          repoName: action.payload,
        },
      };
    case 'buildCommand_update':
      return {
        ...state,
        buffer: {
          ...state.buffer,
          buildCommand: action.payload,
        },
      };
    case 'mainBranch_update':
      return {
        ...state,
        buffer: {
          ...state.buffer,
          mainBranch: action.payload,
        },
      };
    case 'syncPeriod_update':
      return {
        ...state,
        buffer: {
          ...state.buffer,
          syncPeriod: action.payload,
        },
      };
    case 'save':
      return {
        ...state.buffer,
        builds: state.builds,
        buffer: {
          ...state.buffer,
        },
      };
    case 'cancel':
      return {
        ...state,
        buffer: {
          ...state,
        },
      };
    default:
      return state;
  }
};
