import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';
import styles from './style.css.js';

const Carousel = (props) =>  {
  const style = 'list' + props.active;
  const list = styles[style];
  return (
    <div style={styles.carousel}>
      {props.active === 0
        ? null
        : <div style={styles.leftArrow} onClick={props.back} id='prevButton' >&lt;</div>
      }
      <div style={styles.carouselBody}>
        <div style={list}>
          {props.restaurants.map((restaurants, index) => {
            return (
              <CarouselEntry restaurants={restaurants} active={props.active} index={index}
              hoverIn={props.hoverIn} hoverOut={props.hoverOut} hover={props.hover}/>
            );
          })}
        </div>
      </div>
      {props.active === 3
        ? null
        : <div style={styles.rightArrow} onClick={props.next} id='nextButton' >&gt;</div>
      }
    </div>
  );
};

export default Carousel;
