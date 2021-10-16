import React, { useContext } from 'react';
import { ContextApp } from '../../model/reducer';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import './ModalWindow.css';

const ModalWindow = ({ visible, handlerCloseModal }) => {
  const { state, dispatch } = useContext(ContextApp);

  const onKeydown = ({ key }) => {
    switch (key) {
      case 'Escape':
        handlerCloseModal();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  const handlerClickRun = () => {
    dispatch({ type: 'build_run' });
    handlerCloseModal();
  };

  const handlerClickCancel = () => {
    dispatch({ type: 'build_cancel' });
    handlerCloseModal();
  };

  if (!visible) return null;

  return (
    <div className="modal__wrapper" onClick={handlerCloseModal}>
      <div
        className="modal-content__wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="title settings__title">New build</h2>
        <FormField
          value={state.newBuild}
          handlerChange={(value) => {
            dispatch({
              type: 'build_update',
              payload: value,
            });
          }}
          type="block"
          label="Enter the commit hash which you want to build"
          placeholder="Commit hash"
          isValid="true"
        />
        <div className="settings__buttons">
          <Button
            text="Run build"
            size="m"
            color="action"
            href="/"
            handlerClick={handlerClickRun}
          />
          <Button
            text="Cancel"
            size="m"
            color="control"
            href="/"
            handlerClick={handlerClickCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
