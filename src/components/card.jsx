import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import CardModal from './cardportal';
import ModalWrapper from './modal-wrapper';

const CardWrapper = styled.div`
  padding: 5px;
  margin: 10px 10px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 7px; */
  border: 1px solid gray;
  border-top: 5px solid #7048e8;
  border-bottom: 2px solid gray;
  background-color: white;
  cursor: pointer;
  .card__head {
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  .card__body {
    overflow: hidden;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -moz-box-orient: vertical;
    white-space: nowrap;
  }
  .card__author {
    font-style: italic;
  }
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-areas:
    'title close'
    'body body'
    'author delete';
  grid-template-rows: 50px 1fr 50px;
  background-color: aliceblue;
  padding: 20px;
  z-index: 3;
  min-height: 400px;
  min-width: 400px;
  max-width: 50%;

  a {
    grid-area: close;
    justify-self: end;
    text-decoration: none;
  }
  .modal-title {
    margin: 5px 0 20px 15px;
    grid-area: title;
    text-transform: capitalize;
    font-size: 28px;
    font-weight: 500;
  }
  .modal-body {
    grid-area: body;
    margin: 10px 30px 10px 10px;
  }
  .modal-author {
    font-style: italic;
    grid-area: author;
    align-self: end;
  }
  .modal-delete {
    grid-area: delete;
    align-self: end;
    justify-self: end;
  }
`;

const CardItem = (props) => {
  const [state, setState] = useState({
    showModal: false,
  });
  const onClickOpenModal = () => {
    setState((state) => ({ ...state, showModal: true }));
  };
  const onClickCloseModal = (e) => {
    console.log(e);
    e.preventDefault();
    setState((state) => ({ ...state, showModal: false }));
  };
  return (
    <Fragment>
      <CardWrapper onClick={onClickOpenModal}>
        <div className="card__head">{props.card.title}</div>
        <div className="card__body">{props.card.body}</div>
        <div className="card__author">Author:{props.card.author}</div>
      </CardWrapper>
      {state.showModal && (
        <CardModal>
          <ModalWrapper>
            <ModalContent>
              <div className="modal-title">{props.card.title}</div>
              <a href="" onClick={onClickCloseModal} className="close-icon">
                X
              </a>
              <div className="modal-body">{props.card.body}</div>
              <div className="modal-author">Author: {props.card.author}</div>
              <div className="modal-delete">Delete</div>
            </ModalContent>
          </ModalWrapper>
        </CardModal>
      )}
    </Fragment>
  );
};

export default CardItem;
