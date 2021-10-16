import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import './SettingsForm.css';
import { ContextApp } from '../../model/reducer';

const SettingsForm = ({ history }) => {
  let key_index = 0;
  const { state, dispatch } = useContext(ContextApp);

  const handlerClickSave = () => {
    dispatch({ type: 'form_check' });
    let formValid = Object.values(state.formFields).every(
      (field) => field.isValid
    );
    if (formValid) {
      dispatch({ type: 'form_save' });
      history.push('/');
    }
  };

  const handlerClickCancel = () => {
    dispatch({ type: 'form_cancel' });
  };

  return (
    <form className="settings__form" onSubmit={handlerClickSave}>
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
            isValid={field.isValid}
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
          handlerClick={handlerClickSave}
        />
        <Button
          text="Cancel"
          size="m"
          color="control"
          href="/"
          handlerClick={handlerClickCancel}
        />
      </div>
    </form>
  );
};

export default withRouter(SettingsForm);
