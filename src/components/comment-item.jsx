import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  display: grid;
  background-color: #fefdca;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 2px 2px #ccc;
  .comment__author {
    justify-self: flex-end;
  }
`;

const CommentItem = (props) => {
  return (
    <CommentWrapper key={props.comment.id}>
      <div className="comment__body">{props.comment.text}</div>
      <div className="comment__author">{props.comment.author}</div>
    </CommentWrapper>
  );
};

export default CommentItem;
