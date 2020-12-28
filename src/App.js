import React, { useState } from 'react';
import Board from './components/board';
import Column from './components/column';
import Context from './context';

const App = () => {
  const [cards, setCards] = useState({
    todo: [
      {
        id: 0,
        title: 'card1',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
      },
      {
        id: 1,
        title: 'card2',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
      },
      {
        id: 2,
        title: 'card3',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: 'ME',
      },
    ],
    in_progress: [],
    testing: [],
    done: [],

    author: 'ME',
  });
  const addCard = (column, title, body) => {
    let newCard = { id: Date.now(), title, body, author: cards.author };
    setCards((state) => ({
      ...state,
      [column]: cards[column].concat([newCard]),
    }));
    console.log('cards', cards);
    console.log('newCard', newCard);
    console.log(cards[column]);
  };

  return (
    <Context.Provider value={{ addCard }}>
      <Board>
        <Column
          title="TO DO"
          column={'todo'}
          cards={cards.todo}
          author={cards.author}
        ></Column>
      </Board>
    </Context.Provider>
  );
};

export default App;
