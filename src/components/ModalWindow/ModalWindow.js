import React from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import './ModalWindow.css';

const ModalWindow = (props) => {
  return (
    <div className="modal__wrapper" onClick={props.handleClick}>
      <div className="modal-content__wrapper">
        <h2 className="title settings__title">New build</h2>
        <TextInput
          value=""
          label="Enter the commit hash which you want to build"
          placeholder="Commit hash"
          hasBtnClear
        />
        <div className="settings__buttons">
          <Button
            text="Run build"
            size="m"
            color="action"
            href="/"
            handleClick={props.handlerClick}
          />
          <Button
            text="Cancel"
            size="m"
            color="control"
            href="/"
            handleClick={props.handlerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
