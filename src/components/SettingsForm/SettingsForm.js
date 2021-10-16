import React, { useContext } from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import './SettingsForm.css';
import { ContextApp } from '../../model/reducer';

const SettingsForm = () => {
  let key_index = 0;
  const { state, dispatch } = useContext(ContextApp);

  return (
    <form className="settings__form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="title settings__title">Settings</h2>

      <p className="descr settings__descr">
        Configure repository connection and synchronization settings.
      </p>

      <div className="settings__form-fields">
        {Object.entries(state.formFields).map(([fieldName, field]) => (
          <FormField
            value={field.buffer}
            handlerChange={(value) => {
              dispatch({
                type: 'field_update',
                field: fieldName,
                payload: value,
              });
            }}
            type={field.type}
            before={field.before}
            after={field.after}
            label={field.label}
            placeholder={field.placeholder}
            require={field.require}
            key={key_index++}
          ></FormField>
        ))}
      </div>

      <div className="settings__buttons">
        <Button
          text="Save"
          size="m"
          color="action"
          href="/"
          handlerClick={() => dispatch({ type: 'form_save' })}
        />
        <Button
          text="Cancel"
          size="m"
          color="control"
          href="/"
          handlerClick={() => dispatch({ type: 'form_cancel' })}
        />
      </div>
    </form>
  );
};

export default SettingsForm;
