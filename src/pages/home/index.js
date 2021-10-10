import React from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './index.css';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header text="School CI server">
          <Button
            text="Settings"
            size="s"
            icon="gear"
            color="control"
            href="/settings"
          />
        </Header>
        <main className="wrapper home__content-wrapper">
          <div className="home__content">
            <div className="home__icon icon_tools"></div>
            <p className="home__text">
              Configure repository connection and synchronization settings
            </p>
            <Button
              text="Open settings"
              size="m"
              color="action"
              href="/settings"
            />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
