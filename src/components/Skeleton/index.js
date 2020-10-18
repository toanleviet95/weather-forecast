import React from 'react';
import { Wrapper } from './index.styled';

const Skeleton = () => (
  <Wrapper>
    <div className='card'> 
      <div className='card__title loading' /> 
      <div className='card__description loading' /> 
      <div className='card__description loading' /> 
    </div> 
  </Wrapper>
);

export default Skeleton;
