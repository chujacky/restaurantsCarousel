import React from 'react';
import StarsEntry from './StarsEntry.jsx'

const Stars = () => {
  let stars = [1, 1, 1, 1, 1];
  return (
    stars.map((star) => {
    return <StarsEntry star={star} />;
    })
  );
};

export default Stars;
