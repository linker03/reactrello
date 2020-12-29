import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './card';
import Modal from './cardportal';
import ModalWrapper from './modal-wrapper';
import CardCreateForm from './create-card-form';

const ColumnWrapper = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .column__title {
    display: block;
    background-color: #7048e8;
    font-size: 18px;
    font-weight: 700;
    top: -35px;
    color: aliceblue;
    line-height: 2rem;
    padding-left: 10px;
  }

  .column__addcard {
    text-align: center;
    margin: 10px;
    border-radius: 5px;
    line-height: 2rem;
    text-transform: uppercase;
    transition-duration: 0.5s;
  }
  .column__addcard:hover {
    background-color: #d0bfff;
    transition-duration: 0.5s;
    cursor: pointer;
  }
`;
const ModalContent = styled.div`
  background-color: aliceblue;
  padding: 20px;
  z-index: 3;
  min-height: 400px;
  min-width: 400px;
  max-width: 50%;
  form {
    display: flex;
    flex-direction: column;
  }
  .window-title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }
  .card__title {
    margin: 10px 5px 5px 10px;
  }
  .card__title > input {
    margin: 10px;
    width: 50%;
  }
  .card__body {
    margin: 10px 5px 5px 10px;
    display: flex;
  }
  .card__body > textarea {
    margin-left: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

const Column = (props) => {
  const [state, setModal] = useState({ showCreateModal: false });
  function closeModal() {
    setModal({ showCreateModal: false });
  }
  const cards = props.cards.map((card) => {
    return (
      <CardItem key={card.id} card={card} column={props.column}></CardItem>
    );
  });
  return (
    <ColumnWrapper>
      <div className="column__title">{props.title}</div>
      {cards}
      <div
        className="column__addcard"
        onClick={() => {
          setModal({ showCreateModal: true });
        }}
      >
        Add card
      </div>
      {state.showCreateModal && (
        <Modal>
          <ModalWrapper>
            <ModalContent>
              <CardCreateForm
                author={props.author}
                column={props.column}
                close={closeModal}
              />
            </ModalContent>
          </ModalWrapper>
        </Modal>
      )}
    </ColumnWrapper>
  );
};

export default Column;
