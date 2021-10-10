import React from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import BuildList from '../../components/BuildList/BuildList';

const HistoryPage = ({ data }) => {
  return (
    <React.Fragment>
      <Header text={data.repoName} black>
        <Button text="Run build" size="s" icon="play" color="control" />
        <Button size="s" icon="gear" color="control" href="/settings" />
      </Header>

      <main className="wrapper main__wrapper">
        <BuildList builds={data.builds} />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default HistoryPage;
