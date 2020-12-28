import React from 'react';

const ModalWrapper = styled.div`
  position: fixed;
  background-color: RGBA(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const wrapper = () => {
  return (
    <Fragment>
      <ModalWrapper>{children}</ModalWrapper>
    </Fragment>
  );
};

export default wrapper;
