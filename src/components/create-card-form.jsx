import React from 'react';
import styled from 'styled-components';
import Context from '../context';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const CardCreateForm = (props) => {
  const [state, setState] = React.useState({
    column: props.column,
    title: '',
    body: '',
    author: props.author,
  });

  const onChangeHandler = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const { addCard } = React.useContext(Context);

  function submitHandler(event) {
    event.preventDefault();
    addCard(state.column, state.title, state.body);
    props.close();
  }

  return (
    <Form onSubmit={submitHandler}>
      <div className="window-title">Create new card</div>
      <div className="card__title">
        Card's title:
        <input type="text" name="title" onChange={onChangeHandler} />
      </div>
      <div className="card__body">
        Card's text:
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div className="buttons">
        <button className="card__create" type="submit">
          Create
        </button>
        <button className="card__cancel" onClick={props.close}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default CardCreateForm;
