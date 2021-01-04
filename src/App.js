import React, { useState } from 'react';
import Board from './components/board';
import Column from './components/column';
import Context from './context';
import Modal from './components/cardportal';
import ModalWrapper from './components/modal-wrapper';

const App = () => {
  const [cards, setCards] = useState({
    onStart: true,
    todo: [
      {
        id: 0,
        title: 'card1',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
        comments: [
          { id: 0, author: 'ME', text: 'hello, this is comment' },
          { id: 1, author: 'ME', text: 'hello, this is second comment' },
          { id: 2, author: 'ME', text: 'hello, this is third comment' },
          { id: 3, author: 'ME', text: 'hello, this is fourth comment' },
          { id: 4, author: 'ME', text: 'hello, this is fifth comment' },
        ],
      },
      {
        id: 1,
        title: 'card2',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
        comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
      },
      {
        id: 2,
        title: 'card3',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
        comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
      },
    ],
    in_progress: [],
    testing: [],
    done: [],

    author: 'ME',
  });
  const [columnNames, setColumnNames] = useState({
    todo: 'TO DO',
    in_progress: 'In progress',
    testing: 'Testing',
    done: 'Done',
  });

  const addCard = (column, title, body) => {
    let newCard = {
      id: Date.now(),
      title,
      body,
      author: cards.author,
      comments: [],
    };
    setCards((state) => ({
      ...state,
      [column]: cards[column].concat([newCard]),
    }));
  };

  const addComment = (column, cardId, text) => {
    let newComment = {
      id: Date.now(),
      text,
      author: cards.author,
    };
    setCards((state) => ({
      ...state,
      [column]: cards[column].map((card) => {
        if (card.id === cardId) {
          return { ...card, comments: card.comments.concat([newComment]) };
        } else {
          return card;
        }
      }),
    }));
  };

  const editComment = (column, cardId, commentId, newComment) => {
    setCards((state) => ({
      ...state,
      [column]: cards[column].map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            comments: card.comments.map((comment) => {
              if (comment.id === commentId) {
                return { ...comment, text: newComment };
              } else {
                return comment;
              }
            }),
          };
        } else {
          return card;
        }
      }),
    }));
  };

  const delComment = (column, cardId, commentId) => {
    setCards((state) => ({
      ...state,
      [column]: cards[column].map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            comments: card.comments.filter(
              (comment) => comment.id !== commentId
            ),
          };
        } else {
          return card;
        }
      }),
    }));
  };

  const editCard = (column, cardId, newTitle, newBody) => {
    setCards((state) => ({
      ...state,
      [column]: cards[column].map((card) => {
        if (card.id === cardId) {
          return { ...card, title: newTitle, body: newBody };
        } else {
          return card;
        }
      }),
    }));
  };

  const deleteCard = (column, cardId) => {
    setCards((state) => ({
      ...state,
      [column]: cards[column].filter((card) => card.id !== cardId),
    }));
  };

  // const changeColumnName = (column, newTitle) => {
  //   setColumnNames((state) => ({
  //     ...state,
  //     [column]: newTitle,
  //   }));
  // };

  console.log('appstate', cards);

  return (
    <Context.Provider
      value={{
        addCard,
        editCard,
        deleteCard,
        addComment,
        editComment,
        delComment,
      }}
    >
      <Board>
        <Column
          title={columnNames.todo}
          column={'todo'}
          cards={cards.todo}
          author={cards.author}
        ></Column>
        <Column
          title={columnNames.in_progress}
          column={'in_progress'}
          cards={cards.in_progress}
          author={cards.author}
        ></Column>
        <Column
          title={columnNames.testing}
          column={'testing'}
          cards={cards.testing}
          author={cards.author}
        ></Column>
        <Column
          title={columnNames.done}
          column={'done'}
          cards={cards.done}
          author={cards.author}
        ></Column>
      </Board>
      {cards.onStart && (
        <Modal>
          <ModalWrapper>
            <div className="container">
              <div>Enter your name</div>
              <input
                placeholder="Enter name"
                onChange={(event) => {
                  setCards((state) => ({
                    ...state,
                    author: event.target.value,
                  }));
                }}
              ></input>
              <button
                type="button"
                onClick={() => {
                  setCards((state) => ({ ...state, onStart: false }));
                }}
              >
                Ok
              </button>
            </div>
          </ModalWrapper>
        </Modal>
      )}
    </Context.Provider>
  );
};

export default App;
