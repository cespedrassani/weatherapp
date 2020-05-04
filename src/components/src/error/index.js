import React from 'react';
import { Wrapper } from './style';

const Error = (props) => (
  <Wrapper>
    <p>{!props.message ? 'Não foi possível realizar a operação.' : props.message + '.'}</p>
  </Wrapper>
);


export default Error;