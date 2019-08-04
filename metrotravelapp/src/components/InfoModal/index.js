import React from 'react';
import "./InfoModal.css";
import Modal from 'react-modal';
import { Button, } from 'reactstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '40%',
  }
};

const buttonStyles = {
  backgroundColor: 'white',
  color: 'black',
};

const InfoModal = (props) => {
  const { toggleModal, isOpen, metro: { name, desc } } = props;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="container">
        <div className="name_container">
          <h2><b>{name}</b></h2>
        </div>
        <div className="sub_container">
          <h4>{desc}</h4>
        </div>
        <div className="sub_container">
          <Button variant="primary" style={buttonStyles} onClick={toggleModal}>닫기</Button>
        </div>
      </div>
    </Modal >
  );
};

export default InfoModal;
