import './FormField.css';
import React from 'react';

const FormField = ({ type, label, before, after, placeholder, require }) => {
  let component;
  require = require ? ' label_require' : '';

  switch (type) {
    case 'block':
      component = (
        <label className="form-field_block">
          <span className={`label ${require}`}>{label}</span>
          <div className="input input_block">
            <input
              className="input__inner"
              placeholder={placeholder}
              required={require}
            />
            {true ? <span className="clear-btn" /> : null}
          </div>
        </label>
      );
      break;

    case 'inline':
      component = (
        <div className="form-field_inline">
          <span>{before}</span>
          <input
            className="input input_inline"
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
