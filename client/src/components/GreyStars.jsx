import React from 'react';
import styles from './style.css.js';
import styled from 'styled-components';

const GreyStar = styled.span`
  color: #d8d8d8;
  margin-bottom: 2px;
  margin-right: 2px;
`

const GreyStars = () => {
  return (
    <div>
      <GreyStar>★</GreyStar>
      <GreyStar>★</GreyStar>
      <GreyStar>★</GreyStar>
      <GreyStar>★</GreyStar>
      <GreyStar>★</GreyStar>
    </div>
  );
};

export default GreyStars;
