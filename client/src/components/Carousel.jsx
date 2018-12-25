import React from 'react';
import SuggestionList from './SuggestionList.jsx';
import styles from './style.css.js';

const Carousel = (props) =>  {
  const style = 'list' + props.active;
  const list = styles[style]
  return (
    <div style={styles.carousel}>
      <div style={styles.leftArrow} onClick={props.back}>
          &lt;
      </div>
      <div style={styles.carouselBody}>
        <div style={list}>
          {props.restaurants.map((restaurants, index) => {
            return <SuggestionList restaurants={restaurants} active={props.active} index={index} />
          })}
        </div>
      </div>
      <div style={styles.rightArrow} onClick={props.next}>
      &gt;
      </div>
  </div>
);
};

export default Carousel;
