import React from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import './ModalWindow.css';

const ModalWindow = (props) => {
  return (
    <div className="modal__wrapper">
      <div className="modal-content__wrapper">
        <h2 className="title settings__title">New build</h2>
        <FormField
          type="block"
          label="Enter the commit hash which you want to build"
          placeholder="Commit hash"
        />
        <div className="settings__buttons">
          <Button
            text="Run build"
            size="m"
            color="action"
            handlerClick={props.handlerClick}
          />
          <Button
            text="Cancel"
            size="m"
            color="control"
            href="/"
            handlerClick={props.handlerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
