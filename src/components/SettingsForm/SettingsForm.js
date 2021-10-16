import React, { useContext } from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import './SettingsForm.css';
import { ContextApp } from '../../model/reducer';

const SettingsForm = () => {
  const { state, dispatch } = useContext(ContextApp);
  const formFields = [
    {
      value: state.buffer.repoName,
      handlerChange: (value) => {
        dispatch({ type: 'repoName_update', payload: value });
      },
      type: 'block',
      label: 'GitHub repository',
      placeholder: 'user-name/repo-name',
      require: true,
    },
    {
      value: state.buffer.buildCommand,
      handlerChange: (value) => {
        dispatch({ type: 'buildCommand_update', payload: value });
      },
      type: 'block',
      label: 'Build command',
      placeholder: 'npm ci && npm run build',
      require: true,
    },
    {
      value: state.buffer.mainBranch,
      handlerChange: (value) => {
        dispatch({ type: 'mainBranch_update', payload: value });
      },
      type: 'block',
      label: 'Main branch',
      placeholder: 'master',
      require: false,
    },
    {
      value: state.buffer.syncPeriod,
      handlerChange: (value) => {
        dispatch({ type: 'syncPeriod_update', payload: value });
      },
      type: 'inline',
      before: 'Synchronize every',
      placeholder: '10',
      after: 'minutes',
      require: false,
    },
  ];

  return (
    <form className="settings__form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="title settings__title">Settings</h2>

      <p className="descr settings__descr">
        Configure repository connection and synchronization settings.
      </p>

      <div className="settings__form-fields">
        {formFields.map(
          ({
            value,
            handlerChange,
            type,
            before,
            after,
            label,
            placeholder,
            require,
          }) => (
            <FormField
              value={value}
              handlerChange={handlerChange}
              type={type}
              before={before}
              after={after}
              label={label}
              placeholder={placeholder}
              require={require}
            ></FormField>
          )
        )}
      </div>

      <div className="settings__buttons">
        <Button
          text="Save"
          size="m"
          color="action"
          href="/"
          handlerClick={() => dispatch({ type: 'save' })}
        />
        <Button
          text="Cancel"
          size="m"
          color="control"
          href="/"
          handlerClick={() => dispatch({ type: 'cancel' })}
        />
      </div>
    </form>
  );
};

export default SettingsForm;
