import './TextInput.css';
import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      closeBtnVisible: false,
    };
  }

  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  };

  clearClickHandler = () => {
    this.setState({
      value: '',
      closeBtnVisible: false,
    });
  };

  render() {
    return (
      <label className="text-input__wrapper">
        {this.props.label ? (
          <div className="label">
            {this.props.label}
            {this.props.required ? (
              <span className="required-flag"> *</span>
            ) : null}
          </div>
        ) : null}
        <div className={`input input-${this.props.display}`}>
          {this.props.handleChange ? (
            <input
              className="input-field"
              type="text"
              value={this.props.value}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
              required={this.props.required}
            />
          ) : (
            <input
              className="input-field"
              type="text"
              placeholder={this.props.placeholder}
              required={this.props.required}
            />
          )}

          {this.state.closeBtnVisible ? (
            <div className="clear-btn" onClick={this.clearClickHandler} />
          ) : null}
        </div>
      </label>
    );
  }
}

export default TextInput;
