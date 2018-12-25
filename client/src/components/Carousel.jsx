import React from 'react';
import SuggestionList from './SuggestionList.jsx';
import styles from './style.css.js';

const Carousel = (props) => {
  const style = {
    display: 'none',
  };
  return (
    <div style={styles.carousel}>
      <div style={styles.leftArrow} onClick={props.back}>
        &lt;
      </div>
      {props.restaurants.map((restaurants, index) => {
        return <SuggestionList restaurants={restaurants} active={props.active === index} />
      })}
      <div style={styles.rightArrow} onClick={props.next}>
        &gt;
      </div>
    </div>
  );
}

export default Carousel;