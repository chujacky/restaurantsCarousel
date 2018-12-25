import React from 'react';
import StarsEntry from './StarsEntry.jsx';
import styles from './style.css.js';

const Stars = () => {
  let stars = [1, 1, 1, 1, 1];
  return (
    <div style={styles.stars} >
      {stars.map((star) => {
      return <StarsEntry star={star} />;
      })}
    </div>
  );
};

export default Stars;
