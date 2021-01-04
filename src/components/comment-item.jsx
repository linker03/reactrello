import React, { useState } from 'react';
import styled from 'styled-components';
import Context from '../context';

const CommentWrapper = styled.div`
  display: grid;
  background-color: #fefdca;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 2px 2px #ccc;
  .comment__author {
    justify-self: flex-end;
  }
  .comment__body {
    border: 0;
    background-color: #fefdca;
  }
`;

const CommentItem = (props) => {
  const [state, setState] = useState({
    comment: props.comment.text,
  });

  const { editComment } = React.useContext(Context);
  const { delComment } = React.useContext(Context);

  const endEdit = () => {
    editComment(props.column, props.cardId, props.comment.id, state.comment);
  };

  const onChangeHandler = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <CommentWrapper key={props.comment.id}>
      <textarea
        row="2"
        spellCheck="false"
        className="comment__body"
        name="comment"
        value={state.comment}
        onChange={onChangeHandler}
        onBlur={endEdit}
      ></textarea>
      <div className="comment__author">{props.comment.author}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-trash"
        viewBox="0 0 16 16"
        onClick={() => {
          delComment(props.column, props.cardId, props.comment.id);
        }}
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </CommentWrapper>
  );
};

export default CommentItem;
