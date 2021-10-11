import React from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import './SettingsForm.css';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoName: props.data.repoName,
      buildCommand: props.data.buildCommand,
      mainBranch: props.data.mainBranch,
      syncPeriod: props.data.syncPeriod,
      error: false,
    };
  }

  handlerSave = (e) => {
    if (!this.state.repoName || !this.state.buildCommand) {
      this.setState({ error: 'Заполните обязательные поля' });
      e.preventDefault();
    } else {
      this.setState({ error: false });
      this.props.handlerSaveSettings({
        repoName: this.state.repoName,
        buildCommand: this.state.buildCommand,
        mainBranch: this.state.mainBranch ? this.state.mainBranch : 'master',
        syncPeriod: this.state.syncPeriod ? this.state.syncPeriod : 10,
      });
    }
  };
  handleChangeRepoName = (value) => {
    this.setState({
      repoName: value,
    });
  };
  handleChangeMainBranch = (value) => {
    this.setState({
      mainBranch: value,
    });
  };
  handleChangeBuildCommand = (value) => {
    this.setState({
      buildCommand: value,
    });
  };
  handleChangeSyncPeriod = (event) => {
    const value = event.target.value;
    if (Number.isInteger(+value))
      this.setState({
        syncPeriod: event.target.value,
      });
  };

  render() {
    return (
      <form className="settings__form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="title settings__title">Settings</h2>
        <p className="descr settings__descr">
          Configure repository connection and synchronization settings.
        </p>
        <TextInput
          value={this.state.repoName}
          handleChange={this.handleChangeRepoName}
          label="GitHub repository"
          placeholder="user-name/repo-name"
          hasBtnClear
          required
        />
        <TextInput
          value={this.state.buildCommand}
          handleChange={this.handleChangeBuildCommand}
          label="Build command"
          placeholder="npm ci && npm run build"
          hasBtnClear
          required
        />
        <TextInput
          value={this.state.mainBranch}
          handleChange={this.handleChangeMainBranch}
          label="Main branch"
          placeholder="master"
          hasBtnClear
        />
        <div className="form-field">
          Synchronize every
          <input
            value={this.state.syncPeriod}
            onChange={this.handleChangeSyncPeriod}
            type="text"
            className="input-field input-inline"
            placeholder="10"
          />
          minutes
        </div>
        {this.state.error ? (
          <div className="settings__error">{this.state.error}</div>
        ) : null}
        <div className="settings__buttons">
          <Button
            text="Save"
            size="m"
            color="action"
            handleClick={this.handlerSave}
            href="/"
          />
          <Button text="Cancel" size="m" color="control" href="/" />
        </div>
      </form>
    );
  }
}

export default SettingsForm;
