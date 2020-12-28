import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './card';
import Modal from './cardportal';
import Context from '../context';

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

const Column = (props) => {
  const [state, setModal] = useState({ showCreateModal: false });
  const {} = React.useContext(Context);
  function addCard() {}
  const cards = props.cards.map((card) => {
    return <CardItem key={card.id} card={card}></CardItem>;
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
          <div className="card__create_wrapper">
            <div className="card__title">
              <input type="text" />
            </div>
            <div className="card__body">
              <input type="text" />
            </div>
            <button className="card__create">Create</button>
            <button
              className="card__cancel"
              onClick={() => {
                setModal({ showCreateModal: false });
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </ColumnWrapper>
  );
};

export default Column;
