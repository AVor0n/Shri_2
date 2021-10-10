import React from 'react';
import Header from '../../components/Header/Header';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import Footer from '../../components/Footer/Footer';
import './index.css';

const SettingsPage = ({ data, handlerSaveSettings }) => {
  return (
    <React.Fragment>
      <Header text="School CI server" />
      <main className="wrapper settings__wrapper">
        <SettingsForm data={data} handlerSaveSettings={handlerSaveSettings} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default SettingsPage;
