import React, { useState } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import BuildList from '../../components/BuildList/BuildList';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const HistoryPage = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  return (
    <React.Fragment>
      {modalVisible ? <ModalWindow handlerClick={closeModal} /> : null}
      <Header text={data.repoName} black>
        <Button
          text="Run build"
          size="s"
          icon="play"
          color="control"
          handleClick={() => {
            setModalVisible(true);
            console.log(42);
          }}
        />
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
