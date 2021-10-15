import React, { useState } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import BuildCard from '../../components/BuildCard/BuildCard';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import fakeBuilds from '../../model/fake-data';

const HistoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    console.log(modalVisible);
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      {modalVisible ? <ModalWindow handlerClick={closeModal} /> : null}
      <Header text={'Placeholder Title'} black>
        <Button
          text="Run build"
          size="s"
          icon="play"
          color="control"
          handlerClick={openModal}
        />
        <Button size="s" icon="gear" color="control" href="/settings" />
      </Header>

      <main className="wrapper main__wrapper">
        <div className="build-list">
          {fakeBuilds.map((build) => (
            <BuildCard build={build} />
          ))}

          <div className="btn-more__wrapper">
            <Button text="Show more" size="s" color="control" />
          </div>
        </div>
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

export default HistoryPage;
