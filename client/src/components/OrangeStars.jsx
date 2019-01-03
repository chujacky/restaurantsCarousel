import React from 'react';
import styles from './style.css.js';
import styled from 'styled-components';

const OrangeStar = styled.span`
  color: orange;
  margin-bottom: 2px;
  margin-right: 2px;
`

const OrangeStars = (props) => {
  const width = Math.ceil(props.stars / 10) * 10;
  const style = {
    width: `${width}%`
  };
  return (
    <div style={Object.assign({}, styles.orangeStars, style)}>
      <OrangeStar>★</OrangeStar>
      <OrangeStar>★</OrangeStar>
      <OrangeStar>★</OrangeStar>
      <OrangeStar>★</OrangeStar>
      <OrangeStar>★</OrangeStar>
    </div>
  );
};

export default OrangeStars;
