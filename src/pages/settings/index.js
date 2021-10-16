import React from 'react';
import Header from '../../components/Header/Header';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import Footer from '../../components/Footer/Footer';
import './index.css';

const SettingsPage = ({ history }) => {
  return (
    <React.Fragment>
      <Header text="School CI server" />

      <main className="wrapper settings__wrapper">
        <SettingsForm history={history} />
      </main>

      <Footer
        links={[
          { text: 'Support', href: '#!' },
          { text: 'Learning', href: '#!' },
          { text: 'Русская версия', href: '#!' },
        ]}
        copyright="© 2021 Andrey Voronin"
      />
    </React.Fragment>
  );
};

export default SettingsPage;
