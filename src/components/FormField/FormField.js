import './FormField.css';
import React from 'react';

const FormField = ({
  value,
  isValid,
  handlerChange,
  type,
  label,
  before,
  after,
  placeholder,
  require,
}) => {
  let component;
  require = require ? ' label_require' : '';
  isValid = !isValid ? ' input_missed' : '';

  const ownHandlerChange = (e) => handlerChange(e.target.value);
  const ownHandlerChangeNumeric = (e) => {
    const value = e.target.value;
    if (Number.isInteger(+value)) handlerChange(value);
  };
  const clearClickHandler = () => handlerChange('');

  switch (type) {
    case 'block':
      component = (
        <label className="form-field_block">
          <span className={`label ${require}`}>{label}</span>
          <div className={'input input_block' + isValid}>
            <input
              className="input__inner"
              value={value}
              onChange={ownHandlerChange}
              placeholder={placeholder}
              required={require}
            />
            {value !== '' ? (
              <span className="clear-btn" onClick={clearClickHandler} />
            ) : null}
          </div>
        </label>
      );
      break;

    case 'inline':
      component = (
        <div className="form-field_inline">
          <span>{before}</span>
          <input
            className={'input input_inline' + isValid}
            value={value}
            onChange={ownHandlerChangeNumeric}
            inputMode="numeric"
            type="text"
            placeholder={placeholder}
          />
          <span>{after}</span>
        </div>
      );
      break;
    default:
      component = null;
  }
  return component;
};

export default FormField;
